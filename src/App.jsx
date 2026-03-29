import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import EducationPage from './pages/EducationPage.jsx'
import LiveBandPage from './pages/LiveBandPage.jsx'
import StudioPage from './pages/StudioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import './App.css'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import { Scroll } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/liveband" element={<LiveBandPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
