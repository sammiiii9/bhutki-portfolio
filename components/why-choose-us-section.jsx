import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Globally Certified Methods",
      description: "We're one of the few institutes in India using certified Orton-Gillingham and Six Bricks methodologies, not generic teaching approaches.",
      stat: "Only 5% of institutes in India are certified"
    },
    {
      title: "Personalized Learning Paths", 
      description: "Every child gets a unique program designed after detailed assessment. No one-size-fits-all solutions.",
      stat: "Individual assessment for 100% children"
    },
    {
      title: "Parent-Child Together Approach",
      description: "Unlike other programs, we involve parents in the learning journey, ensuring consistency at home.",
      stat: "2x faster results with parent involvement"
    },
    {
      title: "Neuro-Science Based Learning",
      description: "Our methods are backed by brain research and cognitive science, not just traditional teaching.",
      stat: "Based on 50+ years of research"
    },
    {
      title: "Proven Results In 8-12 weeks",
      description: "Most traditional approaches take 6-12 months. Our structured, intensive approach shows results quickly.",
      stat: "200+ success stories in under 3 months"
    },
    {
      title: "Emotional Intelligence Focused",
      description: "We don't just teach skills; we build confidence, reduce anxiety, and develop emotional resilience.",
      stat: "95% improvement in confidence level"
    }
  ]

  return (
    <section id="why-choose-us" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Why Choose Pebble Steps?
          </h2>
          
          {/* Sub Heading */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another tutoring center. We're pioneers in scientifically-proven, globally certified methods that transform children's lives.
          </p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border">
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {feature.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link to="/about">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg">
                More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}