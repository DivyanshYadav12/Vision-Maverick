import Audience from "./components/Audience";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Security from "./components/Security";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Audience />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}