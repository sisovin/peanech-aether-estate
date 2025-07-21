import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Properties from '@/components/Properties';
import Agents from '@/components/Agents';
import Newsletter from '@/components/Newsletter';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Properties />
        <Agents />
        <Newsletter />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
