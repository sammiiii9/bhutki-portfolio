import { useState } from "react"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/happy-indian-boy-and-girl-children-smiling-togethe.jpg",
    title: "Happy Children Together",
    category: "Community",
    description: "Children participating in our community mental health programs"
  },
  {
    id: 2,
    src: "/caring-therapist-with-child-patient-in-bright-ther.jpg",
    title: "Therapy Session",
    category: "Care",
    description: "One-on-one therapy session in our bright, welcoming treatment rooms"
  },
  {
    id: 3,
    src: "/emotion-detection-therapy-session-with-child.jpg",
    title: "Emotion Detection Therapy",
    category: "Treatment",
    description: "Specialized emotion detection therapy helping children understand their feelings"
  },
  {
    id: 4,
    src: "/behavior-therapy-treatment-session.jpg",
    title: "Behavior Therapy",
    category: "Treatment",
    description: "Evidence-based behavior therapy sessions for children and adolescents"
  },
  {
    id: 5,
    src: "/school-refusal-support-counseling.jpg",
    title: "School Support",
    category: "Education",
    description: "Supporting children with school-related anxiety and refusal behaviors"
  },
  {
    id: 6,
    src: "/mission-children-mental-health.jpg",
    title: "Our Mission",
    category: "Mission",
    description: "Dedicated to transforming children's mental health outcomes"
  }
]

const categories = ["All", "Community", "Care", "Treatment", "Education", "Mission"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Gallery</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Explore our facilities, programs, and the positive impact we're making in children's lives
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{image.title}</h3>
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}