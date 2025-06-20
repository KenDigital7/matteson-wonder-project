
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import ComprehensiveStats from "@/components/ComprehensiveStats";
import Timeline from "@/components/Timeline";
import Impact from "@/components/Impact";
import Leadership from "@/components/Leadership";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MissionVision />
      <ComprehensiveStats />
      <Timeline />
      <Impact />
      <Leadership />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
