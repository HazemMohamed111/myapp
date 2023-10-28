import pro1 from "../project1.png";
import pro2 from "../project2.png";
import pro3 from "../project3.png";

function Portfolio (){
    return(
        <div class="grid grid-cols-4 mt-[-20px] bg-[#EAEAEA]">
            <div class="col-span-4 text-center my-2">
                <p class=" text-[50px] font-extrabold text-[#B2B2B2] opacity-30">portfolio</p>
                <p class=" text-[12px] mt-[-24px]">If you do it right, It will last forever.</p>
            </div>
            <div class="col-span-4">
                <Card img={pro1} head="project1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/>
                <Card img={pro2} head="project2" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/>
                <Card img={pro3} head="project3" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/>
            </div>
        </div>
    );
}
    function Card (props) {
        return(
        <div class="grid grid-cols-4 m-6 shadow-lg bg-white">
            <img src={props.img} alt="projects" class="col-span-4   "></img>
            <p class="col-span-4 col-start-1 my-1 text-[20px] font-bold ">{props.head}</p>
            <p class="col-span-4 text-[14px]">{props.description}</p>
        </div>
        );
    }
export default Portfolio