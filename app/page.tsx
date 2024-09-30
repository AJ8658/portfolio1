import Grid from "../components/Grid";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import { FaHome } from 'react-icons/fa'; // Import the home icon

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        {/* Correctly passing navItems as an array of objects */}
        <FloatingNav 
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> }
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}