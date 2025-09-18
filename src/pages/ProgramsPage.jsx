import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { BookOpen, Users, Clock, Target, CheckCircle, Star } from "lucide-react"

export default function ProgramsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20" style={{
                background: 'linear-gradient(135deg, #f5dfdd 0%, #fdf2f8 50%, #ffffff 100%)'
            }}>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-100/50 to-transparent transform -skew-y-2 origin-top-left"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">Structured Literacy Programs</h1>
                        <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-600">
                            Personalized Orton-Gillingham based literacy instruction for children aged 4-14
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Programs */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Programs</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Each program is designed to meet children where they are and help them build reading clarity and confidence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {/* Foundation Program */}
                        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BookOpen className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Foundation Program</h3>
                                <p className="text-center text-muted-foreground mb-6">Ages 4-6 | Pre-reading & Early Reading</p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Phonological awareness development</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Letter-sound correspondence</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Six Bricks multisensory activities</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Pre-writing skills</span>
                                    </li>
                                </ul>

                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary mb-2">₹2,500/session</div>
                                    <div className="text-sm text-muted-foreground mb-4">45 minutes | 2x per week</div>
                                    <Button className="w-full">Start Foundation Program</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Building Program */}
                        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-center mb-4">
                                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Building Program</h3>
                                <p className="text-center text-muted-foreground mb-6">Ages 6-10 | Decoding & Fluency</p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Systematic phonics instruction</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Orton-Gillingham methodology</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Reading fluency development</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Confidence building activities</span>
                                    </li>
                                </ul>

                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary mb-2">₹3,000/session</div>
                                    <div className="text-sm text-muted-foreground mb-4">60 minutes | 2x per week</div>
                                    <Button className="w-full">Start Building Program</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Mastery Program */}
                        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Star className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Mastery Program</h3>
                                <p className="text-center text-muted-foreground mb-6">Ages 10-14 | Comprehension & Advanced Skills</p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Reading comprehension strategies</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Advanced vocabulary development</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Critical thinking skills</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-sm">Academic confidence building</span>
                                    </li>
                                </ul>

                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary mb-2">₹3,500/session</div>
                                    <div className="text-sm text-muted-foreground mb-4">60 minutes | 2x per week</div>
                                    <Button className="w-full">Start Mastery Program</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Program Features */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What's Included in Every Program</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h4 className="font-bold mb-2">1:1 Sessions</h4>
                                <p className="text-sm text-muted-foreground">Personalized attention with certified OG specialists</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="font-bold mb-2">Custom Plans</h4>
                                <p className="text-sm text-muted-foreground">Tailored learning plans based on individual assessment</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-purple-600" />
                                </div>
                                <h4 className="font-bold mb-2">Progress Tracking</h4>
                                <p className="text-sm text-muted-foreground">Regular assessments and detailed progress reports</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-8 h-8 text-orange-600" />
                                </div>
                                <h4 className="font-bold mb-2">Parent Support</h4>
                                <p className="text-sm text-muted-foreground">Regular parent coaching and home activity guidance</p>
                            </div>
                        </div>
                    </div>

                    {/* Specialized Programs */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Specialized Programs</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <h4 className="text-2xl font-bold mb-4 text-foreground">Dyslexia Support Program</h4>
                                    <p className="text-muted-foreground mb-6">
                                        Intensive Orton-Gillingham based intervention for children with dyslexia and reading difficulties.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm">Multisensory learning approach</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm">Structured, sequential instruction</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm">Self-esteem building focus</span>
                                        </li>
                                    </ul>
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <h4 className="text-2xl font-bold mb-4 text-foreground">ESL Reading Program</h4>
                                    <p className="text-muted-foreground mb-6">
                                        Specialized program for English language learners focusing on phonics and reading comprehension.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm">Cultural sensitivity approach</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm">Vocabulary building emphasis</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm">Confidence in English reading</span>
                                        </li>
                                    </ul>
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Child's Reading Journey?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Book a free assessment to find the perfect program for your child's needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                            Book Free Assessment
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Download Program Guide
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}