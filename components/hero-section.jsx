import { Button } from "./ui/button"
import { Counter } from "./ui/counter"
import { ArrowRight, Heart, Users, Award, BookOpen } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Structured Literacy & Confidence Building</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                Building
                <span className="block text-accent">Reading</span>
                <span className="block text-3xl lg:text-5xl font-normal opacity-90">
                  Clarity & Confidence
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-2xl">
                Personalized Orton-Gillingham based literacy program with Six Bricks methodology 
                for children aged 4-14. From decoding to confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bg-primary-foreground/90 text-primary hover:bg-primary-foreground/10 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-white/20 hover:text-white backdrop-blur-sm">
                Learn About Our Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">
                  <Counter end="10" suffix="K+" />
                </div>
                <div className="text-sm opacity-80">Children Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">
                  <Counter end="85" suffix="%" />
                </div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">
                  <Counter end="25" suffix="+" />
                </div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-foreground/10 rounded-full animate-pulse delay-1000"></div>
            
            <div className="relative">
              <img
                src="/happy-indian-boy-and-girl-children-smiling-togethe.jpg"
                alt="Happy children representing youth mental health support"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-primary-foreground rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Care</div>
                    <div className="text-sm text-muted-foreground">Evidence-based treatment</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-primary-foreground rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Excellence</div>
                    <div className="text-sm text-muted-foreground">Award-winning programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
