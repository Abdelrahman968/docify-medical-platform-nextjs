import HeroSection from '@/features/Home/HeroSection';
import MedicalSupport from '@/features/Home/MedicalSupport';
import Explore from '@/features/Home/Explore';
import Services from '@/features/Home/Services';
import Team from '@/features/Home/Team';
import Customers from '@/features/Home/Customers';

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-15">
      <HeroSection />
      <MedicalSupport />
      <Explore num={9} />
      <Services />
      <Explore from="tips" num={5} />
      <Team />
      <Customers />
    </main>
  );
}
