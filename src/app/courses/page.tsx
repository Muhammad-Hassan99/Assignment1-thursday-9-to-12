import Link from "next/link"
export default function Courses(){

    return <>
   <div className="flex  flex-col justify-center items-center">
<h1 className="text-3xl text-center mb-8 font-extrabold">COURSES</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="border-4 border-blue-500 w-64 p-4 rounded-lg">
       <h1>PYTHON</h1>
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsum adipisci dicta libero id esse est.
          </p>
          <Link href="./courses/Typescript"><button className="bg-orange-500 w-full">READ MORE</button></Link>
        </div>
        {/* Card 2 */}
        <div className="border-4 border-blue-500 w-64 p-4 rounded-lg">
         <h1>NEXTJS</h1>
          <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsum adipisci dicta libero id esse est.
          </p>
          <Link href="./courses/Typescript"><button className="bg-orange-500 w-full">READ MORE</button></Link>
        </div>
        {/* Card 3 */}
        <div className="border-4 border-blue-500 w-64 p-4 rounded-lg">
         <h1>TYPESCRIPT</h1>
          <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsum adipisci dicta libero id esse est.
          </p>
          <Link href="./courses/Typescript"><button className="bg-orange-500 w-full">READ MORE</button></Link>
        </div>
      </div>
    </div>
    </>
}