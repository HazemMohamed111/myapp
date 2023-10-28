import graph from "../graphic.png";
import web from "../webdev.png";
import ui from "../ui.png";
import webdesign from "../web-design.png";
function Serving() {
    return (
        <div class= "grid grid-cols-4 md:h-[450px] lg:grid-cols-12 lg:h-[370px]">
        <div class=" col-span-4 lg:col-start-3 lg:col-span-6">
        <p class=" text-[50px] font-extrabold col-span-4 text-center opacity-30 mt-[-20px] text-[#B2B2B2] font-Martel md:text-[46px] lg:text-[64px] lg:col-span-12 ">Services</p>
        <p class=" col-span-4 text-center text-[12px] mt-[-24px] font-Inika text-black md:text-[36px] lg:text-[40px] lg:col-span-4 ">Don't be busy, be productive</p>
        </div>
        <div class=" col-span-4 text-center m-4 md:mt-[0px] lg:col-start-9 ">
        <Card img={graph} head="Graphic Design" description="Graphic design is the process of visual,communication and problem-solving using one or more of typography, photography and illustration."/>
        <Card img={webdesign} head="Web Design" description="Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization."/>
        <Card img={ui} head="UI & UX" description="UX (user experience) and UI (user interface) are two interdependent terms. While UI generally deals with the interaction between users and computer systems, software and applications, UX deals more generally with a user's overall experience with a brand, product or service."/>
        <Card img={web} head="Web Development" description="Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."/>
        </div>
        </div>
    );
}
    function Card (props) {
        return (
            <div class=" grid grid-cols-4 my-2 align-bottom">
                <img src={props.img} alt="" class=" col-span-1 "/>
                <p class="col-span-3 text-left pl-6 text-[18px] mt-4 font-bold">{props.head}</p>
                <p class=" col-span-3 col-start-2 text-left pl-6">{props.description}</p>
            </div>
        );
    }

export default Serving