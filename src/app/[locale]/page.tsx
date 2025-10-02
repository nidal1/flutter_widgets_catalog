import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import WidgetGrid from '@/components/WidgetGrid';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main>
      {/* Navbar */}
      <Navbar locale={locale} />
      {/* end Navbar */}
      <HeroSection />
      {/* end HeroSection */}
      <WidgetGrid />
    </main>
  );
}
