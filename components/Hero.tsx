import { ArrowRight, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-100 to-pink-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Kimon Monokandilos</h1>
        <p className="text-xl md:text-2xl text-secondary mb-4">Interested in UX and AI</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link href="https://www.linkedin.com/in/kimon-monokandilos" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://github.com/kimonmono986" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
        <Button asChild className="bg-accent hover:bg-accent/90 text-white">
          <a href="#contact" className="inline-flex items-center">
            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}

