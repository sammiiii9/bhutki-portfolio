import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { BookOpen, Users, Award } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Education at the Youth Mind Institute
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver free resources to millions of families and training to hundreds of educators each year, so more
              kids get the help they need.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-foreground">Online Family Resource Center</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-foreground">Public awareness campaigns to reduce stigma</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-foreground">Toolkits and trainings for educators in underserved communities</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Family Resource Center</Button>
              <Button variant="outline">School & Community Programs</Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/20 rounded-full"></div>
            <img
              src="/father-and-child-reading-together-educational-reso.jpg"
              alt="Father and child learning together"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Education Services Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">EXPLORE EDUCATION</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="/parent-and-child-discussing-mental-health-concerns.jpg"
                  alt="Mental Health Guidance"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-foreground">What to Do If You're Worried About Suicide</h4>
                  <p className="text-muted-foreground text-sm">A parent's guide to talking to kids in distress.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="/child-psychology-assessment-session.jpg"
                  alt="Psychological Assessment"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-foreground">
                    Psychological Demand Avoidance (PDA) in Children
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    What to do when children avoid anything they feel like a demand, from chores to fun activities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="/diverse-children-playing-together-mental-health-to.jpg"
                  alt="Popular Mental Health Topics"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-foreground">Explore Popular Topics</h4>
                  <p className="text-muted-foreground text-sm">
                    From ADHD to anxiety, our most searched topics cover the most common mental health concerns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
