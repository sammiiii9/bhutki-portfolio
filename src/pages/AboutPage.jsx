import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Users, BookOpen, Award, Target, Globe, Brain } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">About Pebble Steps</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Transforming children's literacy through personalized Orton-Gillingham methodology and Six Bricks innovation
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
                Pebble Steps is dedicated to building reading clarity and confidence in children aged 4-14 through 
                personalized, evidence-based literacy instruction that addresses each child's unique learning needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine the proven Orton-Gillingham methodology with innovative Six Bricks activities to create 
                engaging, multisensory learning experiences that transform struggling readers into confident learners.
              </p>
            </div>
            <div className="relative">
              <img
                src="/happy-indian-boy-and-girl-children-smiling-togethe.jpg"
                alt="Children enjoying reading success"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Approach */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three foundational elements that work together to create reading success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Orton-Gillingham</h3>
                <p className="text-muted-foreground">
                  Structured, sequential, multisensory approach proven effective for all learners, especially those with dyslexia
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Six Bricks</h3>
                <p className="text-muted-foreground">
                  Innovative hands-on methodology using DUPLO bricks to enhance cognitive skills and engagement
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-8 space-y-6">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Personalization</h3>
                <p className="text-muted-foreground">
                  Individual assessment and customized learning plans tailored to each child's unique needs and pace
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
            <p className="text-lg text-muted-foreground">Transforming reading journeys across India</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Children Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">92%</div>
              <div className="text-muted-foreground">Reading Improvement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-foreground mb-2">18</div>
              <div className="text-muted-foreground">Months Avg. Progress</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground">Certified specialists dedicated to literacy excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Priya Sharma</h3>
                <p className="text-accent font-medium mb-2">Founder & Lead OG Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Certified Orton-Gillingham practitioner with 15+ years of experience in structured literacy
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Rajesh Kumar</h3>
                <p className="text-accent font-medium mb-2">Six Bricks Master Trainer</p>
                <p className="text-sm text-muted-foreground">
                  International Six Bricks facilitator specializing in cognitive development and engagement
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Anita Patel</h3>
                <p className="text-accent font-medium mb-2">Learning Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Educational psychologist with expertise in dyslexia and learning differences
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Your Child's Reading Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your child's relationship with reading? Our expert team is here to guide 
            you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Book Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn About Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}