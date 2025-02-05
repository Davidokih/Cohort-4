import CompLayout from "../layout/CompLayout";

const Hero = () => {
  return (
    <div className="flex items-center justify-start h-[40rem] bg-[url(./assets/female-medical.jpg)] bg-center bg-no-repeat bg-cover w-full">
      <CompLayout>
        <div className="max-w-[70%] max-[768px]:text-center justify-center items-center max-[768px]:flex flex-col max-[768px]:max-w-[100%]">
          <button className="text-blue-500 text-sm font-medium bg-[#D3E9FB] rounded-md px-2 py-1">
            GREATE EXPERINCE IN BUILDING
          </button>

          <div className="text-titleText font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>

          <div className="text-lg max-[600px]:text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            hic! Voluptatibus sed harum quam beatae minus perspiciatis illo
            pariatur nihil omnis hic, tempore nesciunt dolorum, ut quos ducimus
            in officia?
          </div>

          <button className="bg-blue-500 text-white px-10 py-2 rounded-md">
            Read More +
          </button>
        </div>
      </CompLayout>
    </div>
  );
};

export default Hero;
