import Image from "next/image";
import Header from "@/components/header"


export default function Home() {
  return (
    <div>
      <Header/> 
        <h1 className="tessori"> Governor Sindh</h1>
<h1>Kamran Khan Tessori</h1>
<h2>Certified Cloud
Applied Generative AI
Engineer (GenEng)</h2>
Earn up to $5,000 / month

<h2>Now admissions are open in Hyderabad</h2>

<button id="apply">Apply Now</button>

<Image className=" py-2 px-40" src="/KT.jpg" alt="KT Image" width={500} height={500} />
    </div>
    
  );
}