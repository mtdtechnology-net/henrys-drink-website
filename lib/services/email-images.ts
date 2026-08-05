import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export interface EmailImageSrcs {
  header: string;
  footer: string;
  instagram: string;
  linkedin: string;
}

export interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentId: string;
}

export interface EmailImages {
  srcs: EmailImageSrcs;
  attachments: EmailAttachment[];
}

type EmailImageKey = keyof EmailImageSrcs;

interface EmailImageConfig {
  key: EmailImageKey;
  filename: string;
  render: () => Promise<Buffer>;
}

function renderSvg(source: string, width: number, height: number) {
  return async () => {
    const svg = await readFile(path.join(process.cwd(), 'public', source));
    return sharp(svg, { density: 300 }).resize(width, height).png().toBuffer();
  };
}

async function renderFooterPng() {
  const svg = await readFile(path.join(process.cwd(), 'public', 'Footer.svg'), 'utf8');
  const match = svg.match(/data:image\/(?:png|jpeg|jpg);base64,([A-Za-z0-9+/=]+)/);
  if (!match) {
    throw new Error('No embedded image found in Footer.svg');
  }
  return sharp(Buffer.from(match[1], 'base64')).resize(600, 260).png().toBuffer();
}

const images: EmailImageConfig[] = [
  { key: 'header', filename: 'blueSignature.png', render: renderSvg('BlueSignature.svg', 90, 116) },
  { key: 'footer', filename: 'Footer.png', render: renderFooterPng },
  { key: 'instagram', filename: 'instagram.png', render: renderSvg('instagram.svg', 44, 44) },
  { key: 'linkedin', filename: 'linkedin.png', render: renderSvg('linkedin.svg', 46, 44) },
];

const pngCache = new Map<EmailImageKey, Promise<Buffer>>();

function getPng(image: EmailImageConfig): Promise<Buffer> {
  let png = pngCache.get(image.key);
  if (!png) {
    png = image.render();
    pngCache.set(image.key, png);
  }
  return png;
}

export async function getEmailImages(mode: 'cid' | 'data-uri'): Promise<EmailImages> {
  const srcs = {} as EmailImageSrcs;
  const attachments: EmailAttachment[] = [];

  for (const image of images) {
    const png = await getPng(image);
    if (mode === 'cid') {
      attachments.push({ filename: image.filename, content: png, contentId: image.filename });
    }
    srcs[image.key] =
      mode === 'cid' ? `cid:${image.filename}` : `data:image/png;base64,${png.toString('base64')}`;
  }

  return { srcs, attachments };
}
