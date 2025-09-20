import { Button } from "./ui/button"
import { Counter } from "./ui/counter"
import { Link } from "react-router-dom"
import { ArrowRight, Users, Award, BookOpen } from "lucide-react"

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
                Personalized Orton-Gillingham & Six Bricks programs that help children master reading, Confidence, communication, and focus in just 8–12 weeks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground/5 text-primary hover:bg-primary-foreground/15 group w-full sm:w-auto">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-white/20 hover:text-white backdrop-blur-sm w-full sm:w-auto">
                  Learn About Our Programs
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">
                  <Counter end="50" suffix="0+" />
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
                  <Counter end="10" suffix="K+" />
                </div>
                <div className="text-sm opacity-80">Learning Hours</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-foreground/10 rounded-full animate-pulse delay-1000"></div>

            <div className="relative">
              {/* Main Hero Image */}
              <img
                src="/happy-indian-boy-and-girl-children-smiling-togethe.jpg"
                alt="Children engaged in structured literacy learning with confidence"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Secondary Images - Smaller overlays */}
              <div className="absolute top-4 right-4 w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white/50">
                <img
                  src="/father-and-child-reading-together-educational-reso.jpg"
                  alt="Father and child reading together"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-20 left-4 w-20 h-20 lg:w-28 lg:h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white/50">
                <img
                  src="/diverse-children-playing-together-mental-health-to.jpg"
                  alt="Diverse children playing together"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-1/2 left-2 w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/50 transform -translate-y-1/2">
                <img
                  src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
                  alt="Caring therapist with child patient"
                  className="w-full h-full object-cover"
                />
              </div>

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
