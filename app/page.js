import Navbar from '@/src/Components/Navbar/Navbar';
import './page.css';
import Hero from '@/src/Components/Hero/Hero';
import BrandingVideo from '@/src/Components/BrandingVideo/BrandingVideo';
export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
    </div>
  );
}
