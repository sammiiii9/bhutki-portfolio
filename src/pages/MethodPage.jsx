import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Brain, BookOpen, Eye, Ear, Hand, Target, Users, Clock, CheckCircle, ArrowRight, Lightbulb, Puzzle } from "lucide-react"

export default function MethodPage() {
  const ogPrinciples = [
    {
      title: "Structured",
      description: "Systematic progression from simple to complex concepts",
      icon: Target,
      color: "bg-primary"
    },
    {
      title: "Sequential", 
      description: "Logical order of skill development and mastery",
      icon: ArrowRight,
      color: "bg-accent"
    },
    {
      title: "Cumulative",
      description: "Each lesson builds upon previously learned skills",
      icon: CheckCircle,
      color: "bg-primary"
    },
    {
      title: "Explicit",
      description: "Direct, clear instruction with no guesswork",
      icon: Lightbulb,
      color: "bg-accent"
    },
    {
      title: "Multisensory",
      description: "Engages visual, auditory, and kinesthetic pathways",
      icon: Brain,
      color: "bg-primary"
    },
    {
      title: "Systematic Phonics",
      description: "Comprehensive sound-symbol relationships",
      icon: BookOpen,
      color: "bg-accent"
    }
  ]

  const multisensoryPathways = [
    {
      pathway: "Visual",
      description: "Seeing letters, words, and patterns",
      icon: Eye,
      activities: ["Letter formation cards", "Color-coded phonics", "Visual word mapping", "Pattern recognition"]
    },
    {
      pathway: "Auditory", 
      description: "Hearing sounds, rhythms, and patterns",
      icon: Ear,
      activities: ["Sound blending exercises", "Rhyme recognition", "Phoneme segmentation", "Auditory memory games"]
    },
    {
      pathway: "Kinesthetic",
      description: "Movement and touch-based learning",
      icon: Hand,
      activities: ["Letter tracing in sand", "Body movements for sounds", "Manipulative activities", "Six Bricks exercises"]
    }
  ]

  const sixBricksUsage = [
    {
      title: "What are Six Bricks?",
      description: "Six Bricks is an innovative methodology using six DUPLO bricks in six different colors (red, orange, yellow, green, blue, dark blue) to enhance learning through hands-on activities.",
      image: "/diverse-children-playing-together-mental-health-to.jpg"
    },
    {
      title: "Why Six Bricks?",
      description: "This approach develops cognitive skills, creativity, communication, and collaboration while making learning fun and engaging. It bridges the gap between play and structured learning.",
      benefits: ["Enhances focus and attention", "Develops fine motor skills", "Improves memory and sequencing", "Builds confidence through success"]
    },
    {
      title: "When do we use Six Bricks?",
      description: "We integrate Six Bricks activities throughout our sessions to reinforce phonics concepts, practice letter formation, develop memory skills, and maintain engagement.",
      applications: ["Phonics reinforcement", "Memory games", "Pattern recognition", "Letter formation practice"]
    },
    {
      title: "Who Can Use Six Bricks?",
      description: "Six Bricks is suitable for all children aged 4-16, particularly effective for visual and kinesthetic learners, children with ADHD, and those who benefit from hands-on learning approaches.",
      suitableFor: ["Visual learners", "Kinesthetic learners", "Children with ADHD", "Reluctant learners"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Our <span className="text-primary">Methods</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evidence-based methodologies that transform learning challenges into success stories
            </p>
          </div>
        </div>
      </section>

      {/* Science Behind Success */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Science Behind Our <span className="text-primary">Success</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our methods are grounded in decades of research and proven effective for children with diverse learning needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Neuroplasticity Research</h3>
                </div>
                <p className="text-muted-foreground">
                  Our multisensory approach leverages the brain's ability to form new neural pathways, 
                  creating stronger connections for reading and language processing.
                </p>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Evidence-Based Practice</h3>
                </div>
                <p className="text-muted-foreground">
                  Both Orton-Gillingham and Six Bricks methodologies are backed by extensive research 
                  and have shown consistent success across diverse learning populations.
                </p>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/researchers-studying-child-brain-development-neuro.jpg"
                alt="Research and Science"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Orton-Gillingham Foundation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Orton-Gillingham <span className="text-primary">Foundation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A time-tested, structured approach to reading instruction that addresses the root causes of reading difficulties
            </p>
          </div>

          {/* OG Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ogPrinciples.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${principle.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <principle.icon className={`w-8 h-8 ${principle.color === 'bg-primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Workflow Diagram */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Orton-Gillingham Workflow
            </h3>
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">Assessment</h4>
                <p className="text-xs text-muted-foreground">Identify learning gaps</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">Plan</h4>
                <p className="text-xs text-muted-foreground">Structured lesson design</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">Teach</h4>
                <p className="text-xs text-muted-foreground">Multisensory instruction</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">Practice</h4>
                <p className="text-xs text-muted-foreground">Reinforce learning</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">5</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">Assess</h4>
                <p className="text-xs text-muted-foreground">Monitor progress</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Six Bricks Enhancement */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Six Bricks <span className="text-primary">Enhancement</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Innovative hands-on methodology that makes learning engaging and effective
            </p>
          </div>

          <div className="space-y-16">
            {sixBricksUsage.map((section, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{section.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.description}</p>
                  
                  {section.benefits && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {section.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.applications && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {section.applications.map((app, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Puzzle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.suitableFor && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Suitable For:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {section.suitableFor.map((suitable, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Users className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{suitable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {section.image ? (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  ) : (
                    <Card className="h-80 bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-dashed border-accent/30">
                      <CardContent className="h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="grid grid-cols-3 gap-2 max-w-32 mx-auto">
                            {['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500'].map((color, i) => (
                              <div key={i} className={`w-8 h-8 ${color} rounded-sm shadow-md`}></div>
                            ))}
                          </div>
                          <p className="text-muted-foreground font-medium">Six Colorful DUPLO Bricks</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multisensory Pathways */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Multisensory <span className="text-primary">Pathways</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Engaging multiple senses simultaneously for deeper learning and retention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {multisensoryPathways.map((pathway, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <pathway.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{pathway.pathway}</h3>
                    <p className="text-muted-foreground text-sm">{pathway.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Activities Include:</h4>
                    {pathway.activities.map((activity, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Our Method */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experience Our Method
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to see how our evidence-based approach can transform your child's learning journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Discovery Call
                </Button>
                <Button size="lg" variant="outline">
                  View Our Programs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}