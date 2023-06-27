import './globals.css'
import Head from 'next/head';
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">

     <Head>

     </Head>

     <body>

      <header>
       <nav className="navbar">
        <ul className="menu">
         <li><Link href="/" className="logo">My Logo</Link></li>
         <li><Link href="/" activeClassName="active">Home</Link></li>
         <li><Link href="about" activeClassName="active">About</Link></li>
         <li><Link href="services" activeClassName="services">Services</Link></li>
         <li><Link href="/projects" activeClassName="projects">Projects</Link></li>
         <li><Link href="contact" activeClassName="active">Contact</Link></li>
        </ul>
       </nav>
      </header>

      <main>{children}</main>

      <footer>
       <div class="footer-content">
        <nav>
         <ul>
          <li><Link href="/" className="logo">My Logo</Link></li>
          <li><Link href="/" activeClassName="active">Home</Link></li>
          <li><Link href="about" activeClassName="active">About</Link></li>
          <li><Link href="contact" activeClassName="active">Contact</Link></li>
         </ul>
        </nav>
       <div class="footer-contact">
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: Headquarters 1600 Amphitheatre Parkway<br/> Mountain View, CA 94043 <br/></p>
       </div>
       </div>
       <div class="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
       </div>
      </footer>

     </body>

    </html>
  )
}
