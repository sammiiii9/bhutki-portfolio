import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { MapPin, Heart, Clock, Users, Award, CheckCircle } from "lucide-react"

export default function CarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20" style={{
        background: 'linear-gradient(135deg, #f5dfdd 0%, #fdf2f8 50%, #ffffff 100%)'
      }}>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-100/50 to-transparent transform -skew-y-2 origin-top-left"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">Clinical Care Services</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-600">
              Gold-standard, evidence-based treatment for children and adolescents
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <img
                src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
                alt="Therapist working with child patient"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Comprehensive Mental Health Care</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clinical centers provide comprehensive mental health services for children, adolescents, and families. 
                We offer evidence-based treatments delivered by experienced clinicians who specialize in child and adolescent mental health.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-foreground">Clinical centers in New York City & San Francisco Bay Area</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="text-foreground">Supported by fees for service, with financial aid available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-foreground">Flexible scheduling including evenings and weekends</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Clinical Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Individual Therapy</h4>
                  <p className="text-muted-foreground">
                    One-on-one therapy sessions tailored to each child's specific needs and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Family Therapy</h4>
                  <p className="text-muted-foreground">
                    Family-based interventions to improve communication and relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Group Therapy</h4>
                  <p className="text-muted-foreground">
                    Peer support groups for children with similar challenges and experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Psychological Assessment</h4>
                  <p className="text-muted-foreground">
                    Comprehensive evaluations to understand your child's strengths and needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Crisis Intervention</h4>
                  <p className="text-muted-foreground">
                    Immediate support and intervention during mental health crises.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">School Consultation</h4>
                  <p className="text-muted-foreground">
                    Collaboration with schools to support your child's academic success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Treatment Approaches */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Evidence-Based Treatment Approaches</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/emotion-detection-therapy-session-with-child.jpg"
                    alt="Emotion Detection Therapy"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Cognitive Behavioral Therapy (CBT)</h4>
                    <p className="text-muted-foreground">
                      Helping children identify and change negative thought patterns and behaviors.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/behavior-therapy-treatment-session.jpg"
                    alt="Behavior Therapy"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Dialectical Behavior Therapy (DBT)</h4>
                    <p className="text-muted-foreground">
                      Teaching emotional regulation and distress tolerance skills.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/school-refusal-support-counseling.jpg"
                    alt="Family Therapy"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Family-Based Treatment</h4>
                    <p className="text-muted-foreground">
                      Involving the whole family in the healing process for better outcomes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/mission-children-mental-health.jpg"
                    alt="Play Therapy"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Play Therapy</h4>
                    <p className="text-muted-foreground">
                      Using play as a therapeutic tool to help children express and process emotions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards better mental health for your child. Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}