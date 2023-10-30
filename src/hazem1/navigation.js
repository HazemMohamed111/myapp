import LOGO from "../logo.png"
import Ham from "../download.png"
import X from "../close.png"
import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
    const [sidebar,setSidebar] = useState(false)
    const handelClick = (e) => {
        (sidebar===false) ? setSidebar(true) : setSidebar(false)
    }
    return (
        <>
        <header class= "lg:h-24 grid lg:grid-cols-12 gap-x-5 px-10 content-center md:grid-cols-8 grid-cols-4 mx-[-0px] ">
            <img src={LOGO} alt="Logo" className="lg:justify-self-start lg:col-start-3 lg:col-span-2 object-fill md:col-start-2 justify-self-start col-span-2 col-start-1 "></img>
            <nav className="lg:col-start-5 lg:col-end-10  lg:order-2 md:hidden hidden lg:block">
                <ul className=" lg:flex md:hidden hidden lg:items-center ">
                    <li class=" font-Intika text-xl text-[#00ABB3] hover:text-[#3C4048] lg:mr-16 lg:mt-5 lg:text-2xl lg:capitalize"><Link to={"./"}>home</Link></li>
                    <li class=" font-Intika text-xl text-[#00ABB3] hover:text-[#3C4048] lg:mr-16 lg:mt-5 lg:text-2xl lg:capitalize"><Link to={'./service'}  >Services</Link></li>
                    <li class=" font-Intika text-xl text-[#00ABB3] hover:text-[#3C4048] lg:mr-16 lg:mt-5 lg:text-2xl lg:capitalize"><Link to={'./portfolio'}  >Portfolio</Link></li>
                    <li class=" font-Intika text-xl text-[#00ABB3] hover:text-[#3C4048] lg:mr-16 lg:mt-5 lg:text-2xl lg:capitalize"><Link to={"./contact"}>Contact</Link></li>
                </ul>
            </nav>
            {
                (!sidebar)&&<button onClick={handelClick} className="col-span-1 col-start-4 lg:hidden md:order-1 md:col-start-7 md:col-span-1 justify-self-center"><img alt="burger" src={Ham}/></button>
            }
        </header>
        {
            (sidebar) && <aside className="w-[100%] h-[100%] z-50 absolute top-0 bg-white md:bg-opacity-80"> 
                <button onClick={handelClick} className="lg:hidden relative top-6 left-20 m-[-40px]  md:pl-[100px] md:pt-[50px]"><img alt="burger" src={X}/></button>
            <ul className=" lg:hidden md:flex flex flex-col items-center h-[100%]  w-[100%]">
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#00ABB3] hover:text-[#3C4048] md:hover:pl-[20px]  lg:capitalize"><Link to='./home'>Home</Link></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#00ABB3] hover:text-[#3C4048] md:hover:pl-[20px] lg:capitalize "><Link to='./services' >Services</Link></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#00ABB3] hover:text-[#3C4048] md:hover:pl-[20px] lg:capitalize"><Link to='./portfolio'  >Portfolio</Link></li>
                    <li class=" font-Intika text-xl font-bold mt-5  text-[#00ABB3] hover:text-[#3C4048] md:hover:pl-[20px] lg:capitalize"><Link to='./contact'>Contact</Link></li>
                </ul>
            </aside>
        }
        </>
    );

}
export default Header