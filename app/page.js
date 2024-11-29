import Navbar from '@/src/Components/Navbar/Navbar';
import './page.css';
import Hero from '@/src/Components/Hero/Hero';
import BrandingVideo from '@/src/Components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/Components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/Components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion';
export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <OurDiff />
    </div>
  );
}
