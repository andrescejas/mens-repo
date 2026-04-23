import { Inter, Montserrat, Great_Vibes } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-script-custom' });

export const metadata = {
  title: 'Cecilia Maurizi | Médica Psiquiatra',
  description: 'Adolescentes y adultos. Virtual y presencial.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
