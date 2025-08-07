import { Experience } from '@/components/Experience';
// import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { Posts } from '@/components/Posts';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Team />
      <Testimonials />
      {/* <FAQ /> */}
      <Posts />
    </>
  );
}
