import graph from "../graphic.png";
import web from "../webdev.png";
import ui from "../ui.png";
import webdesign from "../web-design.png";
function Serving() {
    return (
        <>
        <div class= "">
        <div class=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 ">
        <p class=" text-[50px] font-extrabold col-span-4 text-center opacity-30 mt-[-20px] text-[#B2B2B2] font-Martel md:col-span-8 md:text-[80px] lg:text-[90px] lg:col-span-12 ">Services</p>
        <p class=" col-span-4 text-center text-[12px] mt-[-24px] font-Inika text-black md:col-span-8 md:text-[16px] md:mt-[-36px] lg:text-[20px] lg:mt-[-50px] lg:col-span-12 ">Don't be busy, be productive</p>
        </div>
        <div class=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:mx-20">
        <div class=" col-span-4 mx-3"><Card img={graph} head="Graphic Design" description="Graphic design is the process of visual,communication and problem-solving using one or more of typography, photography and illustration."/></div>
        <div class=" col-span-4 mx-3"><Card img={webdesign} head="Web Design" description="Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization."/></div>
        <div class="hidden lg:block">
            <div class="w-[100px] h-[400px] ml-[280px] mt-[100px] bg-[#3C4048]"></div>
            <div class="w-[300px] h-[300px] ml-[30px] mt-[-350px] bg-[#B2B2B2]"></div>
        </div>
        <div class=" col-span-4 mx-3"><Card img={ui} head="UI & UX" description="UX (user experience) and UI (user interface) are two interdependent terms. While UI generally deals with the interaction between users and computer systems, software and applications, UX deals more generally with a user's overall experience with a brand, product or service."/></div>
        <div class=" col-span-4 mx-3"><Card img={web} head="Web Development" description="Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."/></div>
        </div>
        </div>
        </>
    );
}
    function Card (props) {
        return (
            <div class=" grid grid-cols-4 my-2 md:grid-cols-4 ">
                <img src={props.img} alt="01" class=" col-span-1 md:col-start-1 md:col-span-2 md:p-6 md:order-1"/>
                <p class="col-span-3 text-left pl-6 text-[18px] mt-4 font-bold md:text-[28px] md:pt-[28px] md:mx-[-20px] md:order-2 md:col-span-2 lg:text-[24px] lg:mt-[40px]">{props.head}</p>
                <p class=" col-span-3 col-start-2 text-left pl-6 md:text-[20px] md:col-span-4 md:order-3 lg:text-[16px]">{props.description}</p>
            </div>
        );
    }

export default Serving