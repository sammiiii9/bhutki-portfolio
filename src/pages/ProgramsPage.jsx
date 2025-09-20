import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { BookOpen, Brain, MessageCircle, Users, School, CheckCircle, Clock, Target, Heart, Star, Phone } from "lucide-react"

export default function ProgramsPage() {
  const corePrograms = [
    {
      title: "Language Mastery",
      description: "Comprehensive reading and language development program using Orton-Gillingham methodology",
      icon: BookOpen,
      color: "bg-primary",
      features: [
        "Structured phonics instruction",
        "Reading comprehension strategies", 
        "Vocabulary development",
        "Spelling and writing skills",
        "Multisensory learning activities"
      ],
      duration: "8-12 weeks",
      sessions: "2-3 sessions per week",
      suitable: "Ages 4-16, Reading difficulties, Dyslexia"
    },
    {
      title: "Focus and Memory Mastery",
      description: "Cognitive enhancement program combining Six Bricks methodology with attention training",
      icon: Brain,
      color: "bg-accent",
      features: [
        "Attention and concentration training",
        "Working memory enhancement",
        "Executive function development",
        "Six Bricks cognitive activities",
        "Mindfulness and self-regulation"
      ],
      duration: "6-10 weeks", 
      sessions: "2 sessions per week",
      suitable: "Ages 5-16, ADHD, Attention challenges"
    },
    {
      title: "Confidence and Communication",
      description: "Social communication and self-esteem building program for holistic development",
      icon: MessageCircle,
      color: "bg-primary",
      features: [
        "Social communication skills",
        "Public speaking confidence",
        "Emotional regulation techniques",
        "Peer interaction strategies",
        "Self-advocacy training"
      ],
      duration: "8-12 weeks",
      sessions: "1-2 sessions per week", 
      suitable: "Ages 6-16, Social anxiety, Communication challenges"
    }
  ]

  const specialPrograms = [
    {
      title: "Parent Child Workshop",
      description: "Empowering parents with tools and strategies to support their child's learning journey at home",
      icon: Heart,
      features: [
        "Understanding your child's learning style",
        "Home-based activity strategies",
        "Progress monitoring techniques",
        "Communication strategies",
        "Building confidence at home"
      ],
      format: "Monthly group sessions + individual consultations"
    },
    {
      title: "School Partnership Program", 
      description: "Collaborative approach working with schools to ensure consistent support across environments",
      icon: School,
      features: [
        "Teacher consultation and training",
        "Classroom accommodation strategies",
        "Progress sharing and coordination",
        "IEP/504 plan support",
        "Transition planning"
      ],
      format: "Customized based on school needs"
    }
  ]

  const programInclusions = [
    {
      title: "Comprehensive Assessment",
      description: "Detailed evaluation of learning strengths and challenges",
      icon: Target
    },
    {
      title: "Personalized Learning Plan",
      description: "Customized curriculum based on individual needs",
      icon: BookOpen
    },
    {
      title: "Certified Specialists",
      description: "Expert instructors trained in specialized methodologies",
      icon: Star
    },
    {
      title: "Progress Monitoring",
      description: "Regular assessments and progress reports",
      icon: CheckCircle
    },
    {
      title: "Parent Support",
      description: "Ongoing guidance and home activity suggestions",
      icon: Heart
    },
    {
      title: "Flexible Scheduling",
      description: "Online and in-person options available",
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive, evidence-based programs designed to unlock your child's potential and build lasting confidence
            </p>
          </div>
        </div>
      </section>

      {/* Structured Literacy Program Intro */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Structured Literacy <span className="text-primary">Program</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our flagship approach combining proven methodologies to address diverse learning needs and unlock each child's potential
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Structured Literacy?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Evidence-based approach proven effective for all learners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Particularly beneficial for children with dyslexia and reading difficulties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Systematic progression ensures solid foundation building</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Multisensory techniques engage all learning styles</span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="relative">
              <img
                src="/child-psychology-assessment-session.jpg"
                alt="Structured Literacy Program"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized programs targeting different aspects of learning and development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${program.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <program.icon className={`w-8 h-8 ${program.color === 'bg-primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Program Features:</h4>
                      <div className="space-y-2">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">{program.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Sessions:</span>
                        <span className="font-medium text-foreground">{program.sessions}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-muted-foreground">Suitable for: </span>
                        <span className="font-medium text-foreground">{program.suitable}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Special <span className="text-primary">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Additional support programs for comprehensive family and school involvement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                      <p className="text-muted-foreground text-sm">{program.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-3">What's Included:</h4>
                      <div className="space-y-2">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Format: </span>
                        <span className="font-medium text-foreground">{program.format}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What's Included In <span className="text-primary">Every Program</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support and resources to ensure your child's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programInclusions.map((inclusion, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <inclusion.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{inclusion.title}</h3>
                  <p className="text-muted-foreground text-sm">{inclusion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free discovery call to learn which program is right for your child. 
                Our specialists will assess your child's needs and recommend the best approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Discovery Call
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Our Methods
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No commitment required • Free consultation • Personalized recommendations
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}