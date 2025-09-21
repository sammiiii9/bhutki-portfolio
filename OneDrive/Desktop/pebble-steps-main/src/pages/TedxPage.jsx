import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Play, Users, Award, Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const TedxPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            TEDx <span className="text-primary">Talks</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {siteConfig.founder.name} shares insights on {siteConfig.company.tagline.toLowerCase()} and innovative therapeutic approaches
                        </p>
                    </div>

                    {/* Featured TEDx Talk */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative">
                            <img
                                src="/tedx-featured.jpg"
                                alt="TEDx Talk - Transforming Child Mental Health"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                            <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                                <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                                    <Play className="w-6 h-6 mr-2" />
                                    Watch Talk
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 text-primary">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">Latest Talk</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {siteConfig.company.tagline}: A Revolutionary Approach
                            </h2>
                            <p className="text-lg text-gray-600">
                                {siteConfig.founder.description}
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mt-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Speaker:</strong> {siteConfig.founder.name}, {siteConfig.founder.title}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    {siteConfig.founder.credentials}
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <Users className="w-4 h-4" />
                                    <span>{siteConfig.stats.childrenServed.display} children helped</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Award className="w-4 h-4" />
                                    <span>{siteConfig.stats.successRate.display} success rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talk Topics */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Key Topics Covered
                        </h2>
                        <p className="text-lg text-gray-600">
                            Exploring the future of child development and mental health
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Early Intervention",
                                description: "The critical importance of identifying and addressing mental health challenges early in childhood",
                                icon: "🧠"
                            },
                            {
                                title: "Technology Integration",
                                description: "How digital tools and AI are enhancing therapeutic outcomes for children",
                                icon: "💻"
                            },
                            {
                                title: "Family-Centered Care",
                                description: "Involving families as partners in the therapeutic process for better outcomes",
                                icon: "👨‍👩‍👧‍👦"
                            },
                            {
                                title: "Evidence-Based Practice",
                                description: "Using research and data to guide therapeutic interventions and measure success",
                                icon: "📊"
                            },
                            {
                                title: "Accessibility & Inclusion",
                                description: "Making mental health support accessible to all children, regardless of background",
                                icon: "🌍"
                            },
                            {
                                title: "Future of Therapy",
                                description: "Emerging trends and innovations shaping the future of child mental health care",
                                icon: "🚀"
                            }
                        ].map((topic, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="text-4xl mb-4">{topic.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {topic.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {topic.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Start Your Child's Journey?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join {siteConfig.stats.childrenServed.display} families who have transformed their children's learning with {siteConfig.company.name}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                            Watch More Talks
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TedxPage;