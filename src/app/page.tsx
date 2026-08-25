import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrainingTimeline from "@/components/TrainingTimeline";
import SituationCards from "@/components/SituationCards";
import ReasonsToChoose from "@/components/ReasonsToChoose";
import PersonalPlan from "@/components/PersonalPlan";
import AllServices from "@/components/AllServices";
import FullArchFeature from "@/components/FullArchFeature";
import TechnologyPrecision from "@/components/TechnologyPrecision";
import Comparison from "@/components/Comparison";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import MaterialsMatter from "@/components/MaterialsMatter";
import NotAlone from "@/components/NotAlone";
import PatientResults from "@/components/PatientResults";
import StatsBanner from "@/components/StatsBanner";
import PracticeGallery from "@/components/PracticeGallery";
import PrivateGalleryLead from "@/components/PrivateGalleryLead";
import SmileReel from "@/components/SmileReel";
import Testimonials from "@/components/Testimonials";
import DarkSectionWrapper from "@/components/DarkSectionWrapper";
import DoctorProfile from "@/components/DoctorProfile";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import GlobalFooter from "@/components/GlobalFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Combined Section for Timeline and Situation Cards to ensure seamless background and continuous grid */}
        <div style={{
          position: "relative",
          backgroundColor: "#f4f3ed",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          boxShadow: "0 -20px 50px rgba(0,0,0,0.3)"
          // Removed overflow: hidden here so position: sticky works on child elements!
        }}>
          {/* Microscopic Dots Grid Overlay */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: "6px 6px",
            pointerEvents: "none",
            zIndex: 1,
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            overflow: "hidden"
          }}></div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <TrainingTimeline />
            <SituationCards />
            <ReasonsToChoose />
            <PersonalPlan />
            <AllServices />
            <FullArchFeature />
            <TechnologyPrecision />
            <Comparison />
            <ReadyToGetStarted />
            <MaterialsMatter />
            <NotAlone />
            <PatientResults />
            <StatsBanner />
            <PracticeGallery />
            <PrivateGalleryLead />
          </div>
        </div>
        
        <DarkSectionWrapper>
          <SmileReel />
          <Testimonials />
        </DarkSectionWrapper>

        <DoctorProfile />
        <LocationSection />
        <FAQSection />
        <FooterCTA />
        <GlobalFooter />
      </main>
    </>
  );
}
