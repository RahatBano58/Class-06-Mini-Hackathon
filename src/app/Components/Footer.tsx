import Link from "next/link"
export default function Footer (){
    return (
        <div className="justify-center text-gray-400 text-sm bg-gray-800 font-serif font-light py-4 cursor-pointer">
            <p className=" text-center">Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
            <p className=" text-center">Terms of Service |  Privacy Policy</p> 
            <br/>
            <div className="text-center font-bold text-white text-xl font-sans py-4 hover:text-blue-600 cursor-pointer  ">
               <Link href="https://www.linkedin.com/in/rahat-bano-5b78b41b3/" >Developed By: Rahat Bano</Link>
               <p className=" text-center text-xl font-semibold text-white hover:text-yellow-300 cursor-pointer">HomeWork Done! Given By Sir <b>"Ali Jawwad"</b> Slot: Tuesday 7:00 PM - 10:00 PM</p>
            </div>
        </div>
            
        
    )
}