import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import FeatureStrip from "@/components/FeatureStrip";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingForm from "@/components/BookingForm";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <FeatureStrip />
        <Services />
        <DoctorProfile />
        <Gallery />
        <Testimonials hideForm />
        <div style={{ padding: "var(--spacing-16) 0", backgroundColor: "#f8fafc" }}>
           <div className="container" style={{ textAlign: "center", marginBottom: "var(--spacing-12)" }}>
             <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Transforming <span style={{ color: "var(--color-primary)" }}>Smiles</span></h2>
             <p style={{ color: "var(--color-gray)", maxWidth: "600px", margin: "0 auto" }}>
               Slide to see the incredible difference our advanced cosmetic procedures can make.
             </p>
           </div>
           <div className="container">
             <BeforeAfterSlider />
           </div>
        </div>
        <BookingForm />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
