import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Link } from "react-router-dom"
import { Phone, FileText, Play, TrendingUp, Trophy, ArrowDown, Clock, BookOpen } from "lucide-react"
import { useSiteConfig } from "../src/hooks/useSiteConfig"

export default function TransformationJourneySection() {
  const { contact } = useSiteConfig()
  const journeySteps = [
    {
      id: 1,
      title: "Free Discovery Call & Assessment",
      duration: "30 minutes",
      status: "Step 1",
      description: "We listen to your concerns and conduct a preliminary assessment to understand your child's unique needs.",
      icon: Phone,
      image: "/child-psychology-assessment-session.jpg",
      features: [
        "Parent consultation about child's challenges",
        "Quick reading & focus assessment",
        "Learning style evaluation",
        "Goal setting discussion"
      ],
      bgColor: "bg-primary/5",
      iconColor: "bg-primary",
      borderColor: "border-primary/20",
      delay: 0
    },
    {
      id: 2,
      title: "Personalized Program Design",
      duration: "48 hours",
      status: "Step 2",
      description: "Our certified experts create a tailored learning plan based on assessment results and your child's specific needs.",
      icon: FileText,
      image: "/researchers-studying-child-brain-development-neuro.jpg",
      features: [
        "Detailed learning plan creation",
        "Methodology selection (OG/Six Bricks)",
        "Session scheduling",
        "Parent involvement strategy"
      ],
      bgColor: "bg-accent/10",
      iconColor: "bg-accent",
      borderColor: "border-accent/30",
      delay: 200
    },
    {
      id: 3,
      title: "Weekly Live Sessions Begin",
      duration: "Ongoing",
      status: "Step 3",
      description: "Engaging 1:1 or small group sessions where your child learns through play, multisensory activities, and proven techniques.",
      icon: Play,
      image: "/behavior-therapy-treatment-session.jpg",
      features: [
        "Interactive online/in-person sessions",
        "Multisensory learning activities",
        "Progress tracking and adjustments",
        "Fun, engaging methodology"
      ],
      bgColor: "bg-primary/5",
      iconColor: "bg-primary",
      borderColor: "border-primary/20",
      delay: 400
    },
    {
      id: 4,
      title: "Parent Progress Updates",
      duration: "Weekly",
      status: "Step 4",
      description: "Regular updates keep you informed and involved, with home activities and strategies to support continued growth.",
      icon: TrendingUp,
      image: "/parent-and-child-discussing-mental-health-concerns.jpg",
      features: [
        "Weekly progress reports",
        "Home activity suggestions",
        "Parent coaching calls",
        "Milestone celebration planning"
      ],
      bgColor: "bg-accent/10",
      iconColor: "bg-accent",
      borderColor: "border-accent/30",
      delay: 600
    },
    {
      id: 5,
      title: "Celebrate Results in 8-12 Weeks",
      duration: "Transformation",
      status: "Step 5",
      description: "Watch your child transform from struggling learner to confident communicator with measurable improvements.",
      icon: Trophy,
      image: "/happy-diverse-young-person-smiling-outdoors-mental.jpg",
      features: [
        "Measurable skill improvements",
        "Increased confidence levels",
        "Enhanced communication abilities",
        "Long-term learning success"
      ],
      bgColor: "bg-primary/10",
      iconColor: "bg-primary",
      borderColor: "border-primary/30",
      delay: 800
    },
    {
      id: 6,
      title: "School Partnerships",
      duration: "Ongoing",
      status: "Step 6",
      description: "Collaborate with schools to enhance learning outcomes for all students through comprehensive support programs.",
      icon: BookOpen,
      image: "/school-refusal-support-counseling.jpg",
      features: [
        "Teacher Training",
        "Curriculum Support", 
        "Assessment Tools",
        "Collaborative learning enhancement"
      ],
      bgColor: "bg-accent/10",
      iconColor: "bg-accent",
      borderColor: "border-accent/30",
      delay: 1000
    }
  ]

  return (
    <section id="transformation-journey" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Learning Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your Child's <span className="text-primary">Transformation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From first call to confident success - here's exactly how we guide your child
            from struggling learner to thriving communicator in just 8-12 weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line - Fixed positioning */}
          <div className="absolute left-1/2 top-0 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden lg:block"></div>

          {journeySteps.map((step, index) => (
            <div key={step.id} className="relative mb-16 lg:mb-24">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Content Card - Left side for even, Right side for odd */}
                  <div className={`${index % 2 === 0 ? 'col-span-5 order-1' : 'col-span-5 order-3'}`}>
                    <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${step.borderColor} border-2 shadow-md overflow-hidden ${step.bgColor}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`${step.iconColor} rounded-xl p-3 shadow-md`}>
                            <step.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex items-center space-x-2 bg-muted rounded-full px-3 py-1">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs font-medium text-muted-foreground">{step.duration}</span>
                          </div>
                        </div>

                        <div className="mb-1">
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{step.status}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{step.description}</p>

                        <div className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 ${step.iconColor} rounded-full flex-shrink-0`}></div>
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Circle */}
                  <div className="col-span-2 flex justify-center order-2">
                    <div className={`w-14 h-14 ${step.iconColor} rounded-full shadow-lg flex items-center justify-center border-4 border-background z-20`}>
                      <span className="text-primary-foreground font-bold text-lg">{step.id}</span>
                    </div>
                  </div>

                  {/* Image - Right side for even, Left side for odd */}
                  <div className={`${index % 2 === 0 ? 'col-span-5 order-3' : 'col-span-5 order-1'}`}>
                    <div className="relative">
                      <img
                        src={step.image}
                        alt={`Step ${step.id}: ${step.title}`}
                        className="w-full h-80 object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                      <div className={`absolute top-4 left-4 ${step.iconColor} rounded-lg p-2`}>
                        <step.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <Card className={`group hover:shadow-lg transition-all duration-300 ${step.borderColor} border-2 shadow-md overflow-hidden ${step.bgColor}`}>
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={`Step ${step.id}: ${step.title}`}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className={`absolute top-4 left-4 ${step.iconColor} rounded-lg p-2`}>
                      <step.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className={`absolute top-4 right-4 w-8 h-8 ${step.iconColor} rounded-full flex items-center justify-center`}>
                      <span className="text-primary-foreground font-bold text-sm">{step.id}</span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{step.status}</div>
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2 bg-muted rounded-full px-3 py-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">{step.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{step.description}</p>

                    <div className="grid grid-cols-1 gap-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 ${step.iconColor} rounded-full flex-shrink-0`}></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {index < journeySteps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="bg-primary/20 rounded-full p-2">
                      <ArrowDown className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="text-center mt-16 mb-12">
          <div className="inline-flex bg-card rounded-full shadow-md p-2 border border-border">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 ${step.iconColor} rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-sm`}>
                  {step.id}
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="w-8 h-1 bg-border mx-2"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">8-12 Week Transformation Timeline</p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl overflow-hidden bg-primary/5">
            <CardContent className="p-12">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Child's Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your free discovery call today and take the first step towards transformation.
                Join hundreds of families who've seen remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={contact?.phone?.href}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                    📞 {contact?.phone?.display}
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                    Free Discovery Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}