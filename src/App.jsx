import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import CallbackMemo from "./hooks/CallbackMemo";
import Reducer from "./hooks/Reducer";
import CompLayout from "./layout/CompLayout";
import GlobalLayout from "./layout/GlobalLayout";

const App = () => {
  return (
    <GlobalLayout>
      <div className="bg-[#1E80B9] text-white text-base ">
        <CompLayout>
          <header className="py-4">
            {/* <div className="flex items-center justify-between pb-2 border-b">
              <div>Hotline: (+234) 45676788</div>
              <div>24/7 Ambulance Service</div>
            </div> */}
            <div className="items-center flex-wrap mt-4 justify-between flex">
              <div className="text-responsiveText">Logo</div>
              <div className="flex gap-3 max-[768px]:hidden">
                <nav>Home</nav>
                <nav>About</nav>
                <nav>Service</nav>
                <nav>Contact</nav>
              </div>
              <button className="bg-white text-[#1E80B9] rounded-2xl px-5 py-1 cursor-pointer hover:bg-gray-400">
                Join Our Waitlist
              </button>
              <MobileMenu />
            </div>
          </header>
        </CompLayout>

        {/* <div className="w-full min-w-[200px] bg-no-repeat bg-cover max-w-[700px] bg-[url(./assets/react.svg)] h-[300px]">
      <div>Hello world</div>
      </div> */}
      </div>
      <Hero />
      <Reducer />
      <CallbackMemo />
    </GlobalLayout>
  );
};

export default App;
