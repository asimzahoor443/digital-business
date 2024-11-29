'use client';
import Navbar from '@/src/Components/Navbar/Navbar';
import './page.css';
import Hero from '@/src/Components/Hero/Hero';
import BrandingVideo from '@/src/Components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/Components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/Components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion';
export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: 'var(--secondary-color)',
          })
        }
        onViewportLeave={() =>
          controls.start({
            background: 'white',
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
    </motion.div>
  );
}
