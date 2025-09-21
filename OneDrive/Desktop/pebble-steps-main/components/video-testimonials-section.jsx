import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Play, X, Clock, User } from "lucide-react"
import { useSiteConfig } from "../src/hooks/useSiteConfig"

export default function VideoTestimonialsSection() {
  const { videoTestimonials } = useSiteConfig()
  const [selectedVideo, setSelectedVideo] = useState(null)

  const openVideoModal = (video) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section id="video-testimonials" className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Video Testimonials of Parents
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear directly from parents whose children have transformed through our programs. 
            Real stories, real results, real transformations.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials?.map((video) => (
            <Card 
              key={video.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => openVideoModal(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="w-3 h-3" />
                  <span>{video.parentName} • Child age {video.childAge}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative bg-background rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Content */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{selectedVideo.parentName} • Child age {selectedVideo.childAge}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 border shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of families who have seen remarkable transformations. 
              Book your free discovery call today.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}