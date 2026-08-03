import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Tailwind,
} from '@react-email/components';

export interface NotificationTemplateProps {
  userEmail: string;
  message?: string;
  itemCount?: number;
}

export const NotificationTemplate = ({
  userEmail = 'customer@example.com',
  message,
  itemCount = 3,
}: NotificationTemplateProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-slate-100 font-sans p-6">
        <Container className="bg-white rounded-lg border border-slate-200 p-8 max-w-md mx-auto shadow-sm">
          <Text className="text-2xl font-bold text-slate-800 mb-4">
            Thank You for Your Order!
          </Text>

          <Text className="text-slate-600 text-base mb-2">
            Hi <span className="font-semibold">{userEmail}</span>,
          </Text>

          {message ? (
            <Text className="text-slate-600 text-base mb-6">{message}</Text>
          ) : (
            <Text className="text-slate-600 text-base mb-6">
              We've successfully processed your order for{' '}
              <span className="font-bold text-slate-900">{itemCount} items</span>.
            </Text>
          )}

          <Button
            href="https://yourwebsite.com/orders"
            className="bg-blue-600 text-white font-medium px-5 py-3 rounded-md text-sm text-center block w-full"
          >
            View Your Order
          </Button>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);