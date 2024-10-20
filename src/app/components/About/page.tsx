import Link from "next/link"
export default function About(){
   return  <>
     <div className="min-h-screen bg-zinc-400 justify-center flex items-center">
       
        
        <div className="border-4 h-80 w-10/12 ">
           <h1 className="text-black font-bold text-3xl text-center">ABOUT US</h1>
           <div className="flex  ">
 
  <p className="text-white mt-2 text-2xl  mx-4 font-bold ">"My name is Hassan, and I am a front-end developer with a passion for creating visually appealing and user-friendly web interfaces. I am currently pursuing a BSCS degree at NUML University Hyderabad, where I am deepening my understanding of computer science. Alongside my studies, I am also learning advanced AI concepts at GIAIC, which I believe will complement my front-end development skills and help me create more intelligent and responsive web applications."
</p>
  </div>
  <Link href="./About/Myabout"><button className="bg-orange-500 w-full">READ MORE</button></Link>
        </div>
       
    </div>


    </>
}