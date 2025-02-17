import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Technologies() {
  const technologies = [
    { name: "Next.js", description: "react framework for building the website" },
    { name: "React", description: "javascript library for building user interfaces" },
    { name: "Typescript", description: "adding static typing to javascript" },
    { name: "Tailwind css", description: "utility-first css framework for rapid ui development" },
    { name: "shadcn/ui", description: "pre-built, customizable ui components" },
    { name: "Lucide react", description: "beautiful & consistent icons" },
    { name: "Vercel", description: "platform for deploying and hosting the website" },
  ]

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gradient-to-b from-blue-100 to-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary lowercase">
          Technologies v0 used in this project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-secondary lowercase">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground lowercase">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

