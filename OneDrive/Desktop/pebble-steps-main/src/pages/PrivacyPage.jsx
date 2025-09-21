import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Shield, Lock, Eye, FileText, Phone, Mail } from "lucide-react"
import { useSiteConfig } from "../hooks/useSiteConfig"

export default function PrivacyPage() {
  const { contact } = useSiteConfig()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy and the confidentiality of your information is our top priority
            </p>
            <p className="text-lg text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">HIPAA Compliant</h3>
                <p className="text-muted-foreground text-sm">
                  We follow strict HIPAA guidelines to protect your health information
                </p>
              </div>
            </Card>

            <Card className="text-center">
              <div className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Secure Systems</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced encryption and security measures protect your data
                </p>
              </div>
            </Card>

            <Card className="text-center">
              <div className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Transparent Practices</h3>
                <p className="text-muted-foreground text-sm">
                  Clear policies about how we collect, use, and protect your information
                </p>
              </div>
            </Card>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
                <Card>
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We collect personal information that you provide to us, including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>Name, address, phone number, and email address</li>
                        <li>Date of birth and demographic information</li>
                        <li>Insurance information and emergency contacts</li>
                        <li>Medical history and treatment information</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Health Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As a healthcare provider, we collect and maintain protected health information (PHI) including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>Mental health assessments and diagnoses</li>
                        <li>Treatment plans and progress notes</li>
                        <li>Medication information and medical records</li>
                        <li>Communication with other healthcare providers</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
                <Card>
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Treatment and Care</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use your information primarily to provide you with quality mental health care, including:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>Conducting assessments and developing treatment plans</li>
                        <li>Coordinating care with other healthcare providers</li>
                        <li>Monitoring treatment progress and outcomes</li>
                        <li>Providing crisis intervention when necessary</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Administrative Purposes</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may also use your information for administrative purposes such as:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>Scheduling appointments and sending reminders</li>
                        <li>Processing insurance claims and billing</li>
                        <li>Quality improvement and program evaluation</li>
                        <li>Compliance with legal and regulatory requirements</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Information Sharing</h2>
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">When We May Share Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may share your information only in specific circumstances:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>With your written consent or authorization</li>
                        <li>For treatment coordination with other healthcare providers</li>
                        <li>For payment and insurance purposes</li>
                        <li>When required by law or court order</li>
                        <li>To prevent serious harm to you or others</li>
                        <li>For public health and safety purposes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We work with trusted third-party services that help us provide care, including electronic health record systems, billing services, and appointment scheduling platforms. These partners are required to maintain the same level of privacy protection.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Your Rights</h2>
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Access and Control</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You have important rights regarding your personal and health information:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>Right to access and review your medical records</li>
                        <li>Right to request corrections to your information</li>
                        <li>Right to request restrictions on how we use your information</li>
                        <li>Right to request confidential communications</li>
                        <li>Right to file a complaint about our privacy practices</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Data Security</h2>
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Protection Measures</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We implement comprehensive security measures to protect your information:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Secure access controls and authentication</li>
                        <li>Regular security audits and updates</li>
                        <li>Staff training on privacy and security practices</li>
                        <li>Physical security measures for our facilities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <Card>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      If you have questions about this privacy policy or want to exercise your rights, please contact our Privacy Officer:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Phone</p>
                          <p className="text-muted-foreground">{contact?.phone?.display}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Email</p>
                          <p className="text-muted-foreground">{contact?.email?.privacy || contact?.email?.primary}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Questions About Our Privacy Practices?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is available to help you understand your rights and our privacy practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Privacy Officer
            </Button>
            <Button size="lg" variant="outline">
              Download Full Policy
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}