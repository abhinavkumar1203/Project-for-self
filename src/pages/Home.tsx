import Hero from "../Components/Hero";
import About from "../Components/About";
//import Sections from "../Components/Sections";
import { Sections } from "../Components/Sections";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Sections />
    </div>
  );
}

export default Home;