import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Phone, Mail, MapPin, Clock, Award, Users, Heart, Target, Play, BookOpen, Star } from "lucide-react"

export default function AboutPage() {
  const faqs = [
    {
      question: "What age groups do you work with?",
      answer: "We work with children aged 4-16 years, providing age-appropriate interventions tailored to each developmental stage."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most families see significant improvements within 8-12 weeks, with some children showing progress as early as 4-6 weeks."
    },
    {
      question: "Do you offer online sessions?",
      answer: "Yes, we offer both in-person and online sessions to accommodate different family needs and preferences."
    },
    {
      question: "What qualifications do your therapists have?",
      answer: "All our therapists are certified in Orton-Gillingham methodology and have specialized training in child development and learning disabilities."
    },
    {
      question: "How do you customize programs for each child?",
      answer: "We conduct comprehensive assessments to understand each child's learning style, strengths, and challenges, then create personalized learning plans."
    },
    {
      question: "What is the difference between your approach and traditional tutoring?",
      answer: "Our evidence-based methodologies (Orton-Gillingham and Six Bricks) are specifically designed for children with learning differences, unlike general tutoring approaches."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              About <span className="text-primary">Pebble Steps</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming young minds through evidence-based learning methodologies and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Pebble Steps, we believe every child deserves the opportunity to reach their full potential. 
                Our mission is to provide specialized, evidence-based interventions that help children overcome 
                learning challenges and develop the skills they need to succeed academically and socially.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine proven methodologies like Orton-Gillingham with innovative approaches like Six Bricks 
                to create engaging, multisensory learning experiences that transform struggling learners into 
                confident communicators.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Compassionate Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Targeted Results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
                alt="Our Mission"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Founder's <span className="text-primary">Vision</span>
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Founder"
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                  />
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Dr. Sarah Johnson</h3>
                  <p className="text-primary font-medium">Founder & Clinical Director</p>
                  <p className="text-muted-foreground leading-relaxed">
                    "Having worked with hundreds of children facing learning challenges, I founded Pebble Steps 
                    with a simple belief: every child can learn when given the right tools and support. Our 
                    evidence-based approach combines the latest research with genuine care to create lasting 
                    transformations."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "My vision is to create a world where no child struggles in silence with learning difficulties. 
                    Through personalized, multisensory approaches, we unlock each child's potential and build 
                    confidence that lasts a lifetime."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>• PhD in Educational Psychology</span>
                    <span>• 15+ Years Experience</span>
                    <span>• Certified OG Practitioner</span>
                    <span>• Six Bricks Master Trainer</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            See Our <span className="text-primary">Impact</span>
          </h2>
          <Card className="overflow-hidden">
            <div className="relative bg-muted/20 h-64 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Watch our founder explain the Pebble Steps approach</p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Play Video
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our programs and approach
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Journey CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Start Your Child's Reading Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of families who have seen remarkable transformations with our proven methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Discovery Call
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Our Methods
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}