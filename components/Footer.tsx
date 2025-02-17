"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 bg-gradient-to-b from-yellow-100 to-orange-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Kimon Monokandilos. all rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          Created with the help of v0, vercel's ai-powered assistant.
        </p>
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">scroll to top</span>
        </Button>
      </div>
    </footer>
  )
}

