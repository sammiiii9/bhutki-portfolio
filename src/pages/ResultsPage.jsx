import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { TrendingUp, Users, Clock, Award, Star, Quote, Play, BookOpen, Brain, Target } from "lucide-react"

export default function ResultsPage() {
  const impactNumbers = [
    {
      number: "2,500+",
      label: "Children Transformed",
      description: "Successful learning journeys completed",
      icon: Users,
      color: "text-primary"
    },
    {
      number: "95%",
      label: "Success Rate", 
      description: "Children show significant improvement",
      icon: TrendingUp,
      color: "text-accent"
    },
    {
      number: "8-12",
      label: "Weeks to Results",
      description: "Average time to see measurable progress",
      icon: Clock,
      color: "text-primary"
    },
    {
      number: "18+",
      label: "Months Progress",
      description: "Average reading level improvement",
      icon: Award,
      color: "text-accent"
    }
  ]

  const successStories = [
    {
      name: "Arjun, Age 8",
      challenge: "Severe reading difficulties and low confidence",
      result: "Reading at grade level within 10 weeks, loves books now",
      improvement: "2.5 grade levels",
      program: "Language Mastery",
      quote: "Arjun went from crying during homework to asking for extra reading time. The transformation has been incredible.",
      parent: "Priya Sharma, Mother"
    },
    {
      name: "Meera, Age 12", 
      challenge: "ADHD and attention difficulties affecting academics",
      result: "Improved focus, better grades, increased self-esteem",
      improvement: "85% attention improvement",
      program: "Focus and Memory Mastery",
      quote: "The Six Bricks activities helped Meera learn to focus in a fun way. Her teachers noticed the difference immediately.",
      parent: "Rajesh Kumar, Father"
    },
    {
      name: "Aarav, Age 10",
      challenge: "Social anxiety and communication struggles",
      result: "Confident speaker, better peer relationships",
      improvement: "Dramatic confidence boost",
      program: "Confidence and Communication",
      quote: "Aarav now raises his hand in class and has made new friends. His whole personality has blossomed.",
      parent: "Sunita Patel, Mother"
    }
  ]

  const progressTimeline = [
    {
      week: "Weeks 1-2",
      milestone: "Assessment & Foundation",
      description: "Comprehensive evaluation and program customization",
      activities: ["Initial assessment", "Learning style identification", "Goal setting", "Program design"]
    },
    {
      week: "Weeks 3-6", 
      milestone: "Skill Building",
      description: "Core skill development with multisensory activities",
      activities: ["Phonics instruction", "Six Bricks integration", "Memory training", "Confidence building"]
    },
    {
      week: "Weeks 7-10",
      milestone: "Integration & Practice",
      description: "Applying skills in real-world contexts",
      activities: ["Reading fluency", "Comprehension strategies", "Social skills practice", "Academic application"]
    },
    {
      week: "Weeks 11-12",
      milestone: "Mastery & Transition",
      description: "Independent application and future planning",
      activities: ["Skill consolidation", "Independence training", "Transition planning", "Ongoing support setup"]
    }
  ]

  const researchOutcomes = [
    {
      metric: "Reading Fluency",
      improvement: "Average 2.3 grade levels",
      description: "Measured using standardized reading assessments",
      icon: BookOpen
    },
    {
      metric: "Attention Span",
      improvement: "85% increase",
      description: "Sustained attention during learning tasks",
      icon: Brain
    },
    {
      metric: "Self-Confidence",
      improvement: "92% of children",
      description: "Report feeling more confident about learning",
      icon: Target
    },
    {
      metric: "Academic Performance",
      improvement: "78% grade improvement",
      description: "Better performance in school subjects",
      icon: Award
    }
  ]

  const testimonialVideos = [
    {
      parent: "Mrs. Sharma",
      child: "Rohan, Age 9",
      title: "From Struggling Reader to Book Lover",
      duration: "2:30"
    },
    {
      parent: "Mr. & Mrs. Gupta",
      child: "Ananya, Age 7", 
      title: "Overcoming Dyslexia with Confidence",
      duration: "3:15"
    },
    {
      parent: "Dr. Patel",
      child: "Karan, Age 11",
      title: "ADHD Success Story",
      duration: "2:45"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Our <span className="text-primary">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real transformations, measurable progress, and lasting confidence - see the impact of our evidence-based approach
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact By the <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactNumbers.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real children, real families, real transformations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{story.name}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{story.program}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Challenge: </span>
                        <span className="text-sm text-foreground">{story.challenge}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Result: </span>
                        <span className="text-sm text-foreground">{story.result}</span>
                      </div>
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <span className="text-sm font-medium text-primary">Improvement: {story.improvement}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground italic mb-2">"{story.quote}"</p>
                        <p className="text-xs font-medium text-foreground">- {story.parent}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Typical Progress <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              What to expect during your child's transformation journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-primary/30 hidden lg:block"></div>
            
            <div className="space-y-12">
              {progressTimeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <span className="text-sm font-medium text-primary">{phase.week}</span>
                            <h3 className="text-xl font-bold text-foreground">{phase.milestone}</h3>
                            <p className="text-muted-foreground">{phase.description}</p>
                          </div>
                          <div className="space-y-2">
                            {phase.activities.map((activity, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline marker */}
                    <div className="hidden lg:flex justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Mobile marker */}
                    <div className="lg:hidden flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-primary">{phase.week}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research-Backed Outcomes */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Research-Backed <span className="text-primary">Outcomes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Scientifically measured improvements across key learning areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchOutcomes.map((outcome, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <outcome.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{outcome.metric}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{outcome.improvement}</div>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Video Testimonials of <span className="text-primary">Parents</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from families about their transformation experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative bg-muted/20 h-48 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Play className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{video.parent}</h4>
                      <p className="text-sm text-muted-foreground">{video.child}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration: {video.duration}</span>
                    <Button size="sm" variant="outline">
                      <Play className="w-3 h-3 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to See These Results for Your Child?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of families who have transformed their children's learning journey. 
                Your success story could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Child's Journey
                </Button>
                <Button size="lg" variant="outline">
                  View Our Programs
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Free discovery call • No commitment • Personalized assessment
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}