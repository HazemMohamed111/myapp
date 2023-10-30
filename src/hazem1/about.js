function About () {
    return(
        <div class="grid grid-cols-4 mx-6 mb-4 md:grid-cols-8 lg:mx-14">
        <div class="col-span-4 text-center md:col-span-8">
            <p class="text-[60px] text-[#B2B2B2] font-extrabold opacity-30 lg:text-[90px]">About</p>
            <p class="text-[14px] mt-[-28px] lg:text-[20px] lg:mt-[-45px]">Less is more work</p>
        </div>
        <div class="hidden md:block md:mb-20 lg:ml-16">
            <div class=" w-[110px] h-[200px] ml-[150px] bg-[#00ABB3] "></div>
            <div class="w-[200px] h-[200px] mt-[-170px] bg-[#EAEAEA]"></div>
            <div class=" w-[50px] h-[200px] mt-[-260px] ml-[230px] bg-white"></div>
        </div>
        <div class="col-span-4 md:col-span-4 md:col-start-4">
            <p class="text-base font-semibold my-2 lg:text-[23px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa qui natus fugiat consequatur quod modi libero illo quia neque tenetur laboriosam assumenda saepe, beatae eaque minima dolore soluta vitae!</p>
            <div class="h-[2px] w-[200px] my-2 opacity-60 bg-[#00ABB3] "></div>
            <p class="text-[14px] lg:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab</p>
        </div>
        </div>
    );
}
export default About