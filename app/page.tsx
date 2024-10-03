import Grid from "../components/Grid";
import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNav";
import { FaHome } from 'react-icons/fa'; // Import the home icon
import { navItems } from "../data";
import Clients from "../components/Clients";
import Expierence from "../components/Expierence";
import Approach from "../components/Approach";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        {/* Correctly passing navItems as an array of objects */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Expierence />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}