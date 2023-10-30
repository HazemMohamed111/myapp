import pro1 from "../project1.png";
import pro2 from "../project2.png";
import pro3 from "../project3.png";

function Portfolio (){
    return(
        <div class=" mt-[-10px] bg-[#EAEAEA] md:mt-6 lg:px-20">
            <div class=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 text-center my-2 ">
                <p class=" col-span-4 text-[50px] font-extrabold text-[#B2B2B2] opacity-30 md:col-span-8 lg:col-span-12 lg:text-[90px]">portfolio</p>
                <p class=" text-[12px] mt-[-24px] col-span-4 md:col-span-8 lg:col-span-12 lg:text-[20px] lg:mt-[-45px]">If you do it right, It will last forever.</p>
            </div>
            <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
                <div className=" col-span-4 md:col-span-4"><Card img={pro1} head="project1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                <div className=" col-span-4 md:col-span-4"><Card img={pro2} head="project2" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                <div className=" col-span-4 md:col-span-4"><Card img={pro3} head="project3" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
            </div>
        </div>
    );
}
    function Card (props) {
        return(
        <div class="grid grid-cols-4 m-4 shadow-lg bg-white hover:scale-[105%] duration-300">
            <img src={props.img} alt="projects" class="col-span-4   "></img>
            <p class="col-span-4 col-start-1 my-1 text-[20px] font-bold ">{props.head}</p>
            <p class="col-span-4 text-[14px]">{props.description}</p>
        </div>
        );
    }
export default Portfolio