import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Users, Heart, Award, Target, Globe, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">About Youth Mind Institute</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Transforming children's mental health through innovative care, education, and scientific research
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Youth Mind Institute is dedicated to transforming the lives of children and families 
                struggling with mental health and learning disorders by giving them the help they need to thrive.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're the leading independent nonprofit in children's mental health, operating three Mission Areas 
                that work together for greater impact: Care, Education and Science.
              </p>
            </div>
            <div className="relative">
              <img
                src="/mission-children-mental-health.jpg"
                alt="Children receiving mental health support"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Three Mission Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each area reinforces the others to create a comprehensive approach to children's mental health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Care</h3>
                <p className="text-muted-foreground">
                  Gold-standard, evidence-based treatment through our clinical centers and in-school programs
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
                <p className="text-muted-foreground">
                  Training programs and resources for parents, educators, and mental health professionals
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Science</h3>
                <p className="text-muted-foreground">
                  Cutting-edge research to develop new treatments and improve existing interventions
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">Making a difference in children's lives every day</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Children Served Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Treatment Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Research Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Dedicated professionals leading the way in children's mental health</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Sarah Johnson</h3>
                <p className="text-accent font-medium mb-2">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground">
                  Leading child psychologist with 20+ years of experience in pediatric mental health
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Michael Chen</h3>
                <p className="text-accent font-medium mb-2">Chief Medical Officer</p>
                <p className="text-sm text-muted-foreground">
                  Renowned psychiatrist specializing in adolescent mental health and treatment innovation
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-accent font-medium mb-2">Director of Research</p>
                <p className="text-sm text-muted-foreground">
                  Leading researcher in child development and evidence-based treatment methodologies
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Us in Transforming Children's Lives</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're seeking care, looking to learn, or interested in supporting our mission, 
            we're here to help you make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Involved
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}