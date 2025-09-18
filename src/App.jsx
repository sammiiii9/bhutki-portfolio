import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import WhatsAppSticky from "../components/whatsapp-sticky.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProgramsPage from "./pages/ProgramsPage.jsx"
import MethodPage from "./pages/MethodPage.jsx"
import ResultsPage from "./pages/ResultsPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"
import FAQPage from "./pages/FAQPage.jsx"
import PrivacyPage from "./pages/PrivacyPage.jsx"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/method" element={<MethodPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppSticky />
      </div>
    </Router>
  )
}
