import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "FindMySong",
      description: "A seamless song discovery app with an aesthetically pleasing ui.",
      skills: ["Figma", "UX/UI"],
    },
    {
      title: "SignMe",
      description: "An efficient digital sign-in experience with intuitive user flows.",
      skills: ["Figma", "UX/UI", "User Flows"],
    },
    {
      title: "KindnessApp",
      description: "A supportive mental health awareness app with user-friendly interactions.",
      skills: ["Figma", "Prototyping"],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary lowercase">my projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

