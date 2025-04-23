import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Experienceg from "@/components/experienceg";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      {/* <AboutMe/> */}
      <Experienceg/>
      <Services/> 
      {/* <Portfolio/> */}
      <Contact/>
    </div>
   
  );
}
