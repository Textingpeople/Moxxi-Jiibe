import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employee Login — Jiibe',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
