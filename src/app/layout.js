import '../index.css';

export const metadata = {
  title: 'MANDLACX - CCTV Dashboard',
  description: 'CCTV Monitoring Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
