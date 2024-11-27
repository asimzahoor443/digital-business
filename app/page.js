import Navbar from '@/src/Components/Navbar/Navbar';
import './page.css';
import Hero from '@/src/Components/Hero/Hero';
export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}
