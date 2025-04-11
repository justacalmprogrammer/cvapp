import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Services/> 
    </div>
   
  );
}
