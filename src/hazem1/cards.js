import lamp from '../desk-lamp.png';
import chmi from '../chmical.png';
import ball from '../earthball.png';
function Dnav () {
    return(
        <>
        <div class="grid md:grid md:grid-cols-8 lg:grid-cols-12 lg:mx-20">
        <Cards img={lamp} head='Tell Us Your Idea' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/>
        <Cards img={chmi} head='We Will Do All The Work' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/>
        <Cards img={ball} head='Your Product Is WorldWide' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/>
        </div>
        </>
    );
}

function Cards (props) {
    return (
        <div class= "grid grid-cols-4 shadow-md duration-300 md:grid-cols-4 bg-white rounded-[10px] hover:scale-[110%] m-6 md:mx-2 md:col-span-4 lg:grid-cols-4 lg:mx-4 ">
            <img src={props.img} alt="product" class="h-[70px] w-[70px] object-fill rounded-[10px] col-span-4 drop-shadow-xl justify-self-center md:w-[100px] md:h-[100px] md:order-1 md:col-span-4 lg:order-1 lg:col-span-4 lg:w-[100px]  " />
                <p className=" col-span-4 font-semibold text-black text-[18px] my-1 font-Imprima text-center md:text-[28px] md:order-2 md:col-span-4 lg:order-2 lg:col-span-4 lg:text-center lg:text-[26px]">{props.head}</p>
                <p class="text-[14px] font-Inika text-center px-4 md:text-[24px] md:order-3 md:col-span-4 col-span-4 lg:order-3 lg:text-[18px] ">{props.description}</p>
        </div>
    );
}
export default Dnav