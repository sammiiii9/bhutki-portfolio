import { Button } from "./ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Transforming Children's Mental Health
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Youth Mind Institute is dedicated to transforming the lives of children and families struggling with
                mental health and learning disorders by giving them the help they need to thrive.
              </p>
              <p>
                We're the leading independent nonprofit in children's mental health, operating three Mission Areas that
                work together for greater impact: Care, Education and Science.
              </p>
            </div>

            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-8">
              {/* Mission circles */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-accent flex items-center justify-center mb-4">
                    <span className="font-bold text-accent">Science</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-4 border-secondary flex items-center justify-center mb-4">
                    <span className="font-bold text-secondary-foreground">Care</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full border-4 border-primary flex items-center justify-center mb-4">
                    <span className="font-bold text-primary">Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
