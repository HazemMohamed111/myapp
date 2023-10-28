function Cards (props) {
    return (
        <div class= "grid grid-cols-4 shadow-md duration-300  md:grid-cols-8 bg-white rounded-[10px] hover:scale-[110%] m-6 lg:grid-cols-4    ">
            <img src={props.img} alt="product" class="h-[70px] w-[70px] object-fill rounded-[10px] col-span-4 drop-shadow-xl justify-self-center md:w-[175px] md:h-[175px] md:col-span-2 md:col-start-7 lg:order-1 lg:col-span-4 lg:w-[300px]  " />
                <p className=" col-span-4 font-semibold text-black text-[18px] my-1 font-Imprima justify-self-center md:text-[30px] md:col-start-1 lg:order-2 lg:col-span-3 lg:col-start-1 lg:text-[32px]   ">{props.head}</p>
                <p class="text-[14px] font-Inika text-center px-4 md:text-[30px] md:col-span-6 col-span-4 lg:order-3 lg:text-[24px] ">{props.description}</p>
        </div>
    );
}
export default Cards