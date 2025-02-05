import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "changeState":
      return { ...state, change: !state.change };

    default:
      break;
  }
};
const MobileMenu = () => {
  const [state, dispatch] = useReducer(reducer, { change: false });
  return (
    <>
      <div
        onClick={() => dispatch({ type: "changeState" })}
        className="hidden max-[768px]:block cursor-pointer"
      >
        menu
      </div>
      <div
        className={`hidden max-[768px]:block transition-all duration-300 delay-150 fixed h-[100vh] bg-blue-500 w-full ${
          state.change ? "left-0" : "-left-[-100rem]"
        } bottom-0`}
      >
        <div
          onClick={() => dispatch({ type: "changeState" })}
          className="cursor-pointer"
        >
          Close
        </div>
        <div>
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
