import { useState } from "react"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { ChevronDown, ChevronUp, Search, Phone, Mail, MapPin } from "lucide-react"
import { useSiteConfig } from "../hooks/useSiteConfig"

const faqData = [
  {
    id: 1,
    category: "General",
    question: "What is the Youth Mind Institute?",
    answer: "The Youth Mind Institute is a leading independent nonprofit organization dedicated to transforming the lives of children and families struggling with mental health and learning disorders. We operate through three mission areas: Care, Education, and Science."
  },
  {
    id: 2,
    category: "Services",
    question: "What types of mental health services do you provide?",
    answer: "We provide comprehensive mental health services including individual therapy, group therapy, family therapy, psychological evaluations, medication management, and specialized programs for conditions like ADHD, anxiety, depression, autism spectrum disorders, and learning disabilities."
  },
  {
    id: 3,
    category: "Appointments",
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling our main number, using our online booking system, or clicking the 'Appointments' button on our website. Our intake coordinators will help match you with the right clinician and program for your child's needs."
  },
  {
    id: 4,
    category: "Insurance",
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. We also offer financial assistance and sliding scale fees for families who qualify. Our billing team can help verify your insurance coverage and explain your benefits."
  },
  {
    id: 5,
    category: "Services",
    question: "What age groups do you serve?",
    answer: "We serve children and adolescents from age 2 through 18 years old. Some of our programs also provide support and training for parents and families."
  },
  {
    id: 6,
    category: "Treatment",
    question: "How long does treatment typically last?",
    answer: "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term interventions (8-12 sessions), while others may need longer-term support. We regularly review progress and adjust treatment plans accordingly."
  },
  {
    id: 7,
    category: "Emergency",
    question: "What should I do in a mental health emergency?",
    answer: "If your child is in immediate danger, call 911 or go to your nearest emergency room. For mental health crises, you can also call the National Suicide Prevention Lifeline at 988 or contact our crisis support line during business hours."
  },
  {
    id: 8,
    category: "Parents",
    question: "How can parents be involved in treatment?",
    answer: "Parent involvement is crucial to successful treatment. We offer parent training programs, family therapy sessions, and regular consultation meetings. We also provide resources and strategies for supporting your child's mental health at home."
  },
  {
    id: 9,
    category: "School",
    question: "Do you work with schools?",
    answer: "Yes, we have school-based programs and work closely with educational teams. We can provide consultation, training for school staff, and help develop appropriate accommodations and support plans for students."
  },
  {
    id: 10,
    category: "Research",
    question: "Can my child participate in research studies?",
    answer: "We conduct various research studies to improve treatments for children's mental health. Participation is always voluntary, and we'll provide detailed information about any studies your child might be eligible for."
  }
]

const categories = ["All", "General", "Services", "Appointments", "Insurance", "Treatment", "Emergency", "Parents", "School", "Research"]

export default function FAQPage() {
  const { contact, businessHours } = useSiteConfig()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, appointments, and programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="hover:shadow-md transition-shadow">
                <div>
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                    </div>
                    {openItems.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {openItems.has(faq.id) && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground">
              Our team is here to help. Contact us using any of the methods below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">{businessHours?.weekdays?.days}, {businessHours?.weekdays?.hours}</p>
                <a href={contact?.phone?.href} className="text-primary font-semibold hover:underline">
                  {contact?.phone?.display}
                </a>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">We'll respond within 24 hours</p>
                <a href={`mailto:${contact?.email?.primary}`} className="text-primary font-semibold hover:underline">
                  {contact?.email?.primary}
                </a>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">Multiple locations available</p>
                <Button variant="outline" size="sm">
                  Find Locations
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}