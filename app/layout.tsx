import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import TransitionWrapper from '@/components/layout/TransitionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pack Admin',
  description: 'For PSchool Eyes Only',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          {/* <TransitionWrapper> */}
          <div className='min-h-screen min-w-screen w-full h-full flex items-center justify-center'>
            {children}
          </div>
          {/* </TransitionWrapper> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
