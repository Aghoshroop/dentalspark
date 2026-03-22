import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorProfile from "@/components/DoctorProfile";

export default function DentistPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--spacing-24)", minHeight: "80vh", backgroundColor: "var(--color-white)" }}>
        <DoctorProfile />
      </main>
      <Footer />
    </>
  );
}
