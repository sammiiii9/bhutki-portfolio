import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Brain, Eye, Hand, Ear, Target, Users, BookOpen, CheckCircle } from "lucide-react"

export default function MethodPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Our Method</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Orton-Gillingham + Six Bricks: A proven multisensory approach to reading success
            </p>
          </div>
        </div>
      </section>

      {/* Method Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">The Science Behind Our Success</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our method combines the time-tested Orton-Gillingham approach with innovative Six Bricks methodology, 
                creating a multisensory learning experience that addresses different learning styles and builds 
                both reading skills and confidence.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-emerald-600" />
                  <span className="text-foreground">Evidence-based neurological approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-foreground">Individualized to each child's needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-foreground">Proven success with diverse learners</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/emotion-detection-therapy-session-with-child.jpg"
                alt="Multisensory learning method"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Orton-Gillingham Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">The Orton-Gillingham Foundation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Structured</h4>
                  <p className="text-sm text-muted-foreground">
                    Systematic progression from simple to complex concepts
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Sequential</h4>
                  <p className="text-sm text-muted-foreground">
                    Logical order that builds upon previous learning
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Multisensory</h4>
                  <p className="text-sm text-muted-foreground">
                    Engages visual, auditory, and kinesthetic pathways
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Individualized</h4>
                  <p className="text-sm text-muted-foreground">
                    Adapted to each student's learning pace and style
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Six Bricks Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Six Bricks Enhancement</h3>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-foreground">What are Six Bricks?</h4>
                  <p className="text-lg text-muted-foreground mb-6">
                    Six Bricks is an innovative methodology using six DUPLO bricks in six colors to create 
                    engaging, hands-on learning activities that develop cognitive skills, creativity, and confidence.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Enhances memory and concentration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Builds spatial awareness</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Develops fine motor skills</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Increases engagement and motivation</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="/behavior-therapy-treatment-session.jpg"
                    alt="Six Bricks methodology"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Multisensory Learning */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Multisensory Learning Pathways</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Visual</h4>
                  <p className="text-muted-foreground">
                    Color-coded materials, visual patterns, and graphic organizers help children see language structure
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Ear className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Auditory</h4>
                  <p className="text-muted-foreground">
                    Sound patterns, rhymes, and verbal repetition strengthen phonological awareness
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Hand className="w-10 h-10 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Kinesthetic</h4>
                  <p className="text-muted-foreground">
                    Hand movements, tracing, and Six Bricks activities engage muscle memory
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-10 h-10 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Cognitive</h4>
                  <p className="text-muted-foreground">
                    Problem-solving activities and metacognitive strategies build thinking skills
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Learning Process */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our 5-Step Learning Process</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Assessment & Diagnosis</h4>
                  <p className="text-muted-foreground">
                    Comprehensive evaluation to identify strengths, challenges, and learning style preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Personalized Plan Creation</h4>
                  <p className="text-muted-foreground">
                    Custom learning plan designed specifically for your child's needs and goals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Multisensory Instruction</h4>
                  <p className="text-muted-foreground">
                    One-on-one sessions using OG methodology enhanced with Six Bricks activities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Progress Monitoring</h4>
                  <p className="text-muted-foreground">
                    Regular assessments and adjustments to ensure continuous improvement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Confidence Building</h4>
                  <p className="text-muted-foreground">
                    Celebrating successes and building self-esteem through positive reinforcement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience Our Method</h2>
          <p className="text-xl mb-8 opacity-90">
            See how our unique combination of OG and Six Bricks can transform your child's reading journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Book Free Trial Session
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Watch Method Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}