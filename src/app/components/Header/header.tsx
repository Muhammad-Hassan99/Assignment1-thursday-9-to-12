import Link from "next/link"
export default function Header (){
    return  <>
    <div className="bg-slate-500 ">
        <ul className="flex justify-center space-x-6 font-semibold text-white text-2xl">
            <li>HOME</li>
            <Link href="./components/About"> <li>ABOUT</li></Link> 
            <li>CONTACT</li>
           <Link href="./courses"><li>COURSES</li></Link> 
        </ul>
    </div>



    </>
}