import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import WidgetGrid from '@/components/WidgetGrid';

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* end Navbar */}
      <HeroSection />
      {/* end HeroSection */}
      <WidgetGrid />
    </main>
  );
}
