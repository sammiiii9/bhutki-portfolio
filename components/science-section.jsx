import { Button } from "./ui/button"
import { Microscope, Brain, Zap } from "lucide-react"

export default function ScienceSection() {
  return (
    <section id="science" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full"></div>
            <img
              src="/researchers-studying-child-brain-development-neuro.jpg"
              alt="Scientists researching child brain development"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Science at the Youth Mind Institute
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our researchers and engineers are uncovering the causes of mental health and learning disorders to develop
              tomorrow's breakthrough treatments.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Microscope className="w-5 h-5 text-accent" />
                <span className="text-foreground">Advanced neuroscience and applied technology</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-primary" />
                <span className="text-foreground">Brain imaging and cognitive research</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-foreground">Digital therapeutics and intervention tools</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Research Programs</Button>
              <Button variant="outline">Scientific Publications</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
