import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6 text-sm font-medium">
          <li>
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#technologies" className="text-foreground hover:text-primary transition-colors">
              Technologies
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

