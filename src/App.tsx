import { Navbar } from '@/components/Navbar';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Hero } from '@/sections/Hero';
import { Apartment } from '@/sections/Apartment';
import { Gallery } from '@/sections/Gallery';
import { Amenities } from '@/sections/Amenities';
import { Location } from '@/sections/Location';
import { Booking } from '@/sections/Booking';
import { Blog } from '@/sections/Blog';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Apartment />
        <Gallery />
        <Amenities />
        <Location />
        <Booking />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
