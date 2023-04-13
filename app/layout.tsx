import './globals.css';
import Navbar from './components/Navbar';
import ProfileImage from './components/ProfileImage';

export const metadata = {
  title: "Antony's Blog",
  description: 'Created by Antony Jordan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-sky-800'>
        <Navbar />
        <ProfileImage />
        {children}
      </body>
    </html>
  )
}
