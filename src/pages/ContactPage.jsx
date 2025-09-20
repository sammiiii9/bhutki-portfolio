import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Send, CheckCircle } from "lucide-react"
import { useSiteConfig } from "../hooks/useSiteConfig"

export default function ContactPage() {
  const { contact, businessHours } = useSiteConfig()
  
  const contactMethods = [
    {
      title: "Book Trial Session",
      description: "Schedule a free discovery call and trial session for your child",
      icon: Calendar,
      action: "Book Now",
      color: "bg-primary",
      details: "30-minute consultation + 45-minute trial session"
    },
    {
      title: "Call Us Directly", 
      description: "Speak with our specialists immediately",
      icon: Phone,
      action: contact?.phone?.display,
      color: "bg-accent",
      details: `Available ${businessHours?.weekdays?.days}, ${businessHours?.weekdays?.hours}`
    },
    {
      title: "WhatsApp Message",
      description: "Quick questions and instant responses",
      icon: MessageCircle,
      action: "Message Now",
      color: "bg-primary",
      details: `Fast response within ${businessHours?.responseTime}`
    }
  ]

  const officeHours = [
    { day: businessHours?.weekdays?.days, hours: businessHours?.weekdays?.hours },
    { day: businessHours?.saturday?.days, hours: businessHours?.saturday?.hours },
    { day: businessHours?.sunday?.days, hours: businessHours?.sunday?.hours }
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: contact?.phone?.display,
      description: "Call for immediate assistance"
    },
    {
      icon: Mail,
      label: "Email", 
      value: contact?.email?.primary,
      description: "Send us your questions"
    },
    {
      icon: MapPin,
      label: "Location",
      value: contact?.locations?.join(", "),
      description: "Multiple locations available"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your child's transformation journey? We're here to help every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Preferred <span className="text-primary">Contact Method</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to connect with our team of specialists
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${method.color}/20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className={`w-8 h-8 ${method.color === 'bg-primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="text-sm text-muted-foreground mb-6">{method.details}</p>
                  <Button 
                    className={`w-full ${method.color === 'bg-primary' ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90'}`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Parent Name *</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Child's Name *</label>
                      <Input placeholder="Child's name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input placeholder={contact?.phone?.display} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Child's Age *</label>
                      <Input placeholder="Age in years" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Primary Concerns</label>
                    <textarea 
                      className="w-full p-3 border border-border rounded-md resize-none h-24"
                      placeholder="Tell us about your child's learning challenges or goals..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Program</label>
                    <select className="w-full p-3 border border-border rounded-md">
                      <option>Select a program</option>
                      <option>Language Mastery</option>
                      <option>Focus and Memory Mastery</option>
                      <option>Confidence and Communication</option>
                      <option>Not sure - need guidance</option>
                    </select>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          <p className="text-lg text-foreground">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Message on WhatsApp
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant answers to your questions. Our specialists are available on WhatsApp 
                for quick consultations and program information.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Click to start a conversation • Fast response guaranteed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}