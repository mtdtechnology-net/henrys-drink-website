import { readFile } from 'node:fs/promises';
import path from 'node:path';

export interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentId: string;
}

export interface ToCidAttachmentOptions {
  filename?: string;
  contentId?: string;
}

export async function toCidAttachment(
  source: string | Buffer,
  options: ToCidAttachmentOptions = {},
): Promise<EmailAttachment> {
  const content = typeof source === 'string' ? await readFile(source) : source;

  const filename = options.filename ?? (typeof source === 'string' ? path.basename(source) : undefined);
  if (!filename) {
    throw new Error('toCidAttachment: a filename is required when the source is a Buffer');
  }

  return {
    filename,
    content,
    contentId: options.contentId ?? filename,
  };
}
