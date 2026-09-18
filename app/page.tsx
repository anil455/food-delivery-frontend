import AppsSection from "@/components/AppsSection";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import PartnerSection from "@/components/PartnerSection";
import PreviousOrders from "@/components/PreviousOrders";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
      <Header />

      
       <Banner />

      <main className="flex-1">
        <Hero />
        <PreviousOrders />
        <HomeContent />
        <PartnerSection />
        <AppsSection />
      </main>

      <Footer />
    </div>
  );
}
