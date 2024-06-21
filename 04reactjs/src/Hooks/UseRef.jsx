import { useRef } from "react";

const UseRef = () => {
  const value = useRef();

  return (
    <div>
      <input type="text" ref={value} />
      <button
        onClick={() => {
          console.log(value.current);
          value.current.style.background = "blue";
        }}
      >
        display useRef
      </button>
    </div>
  );
};

export default UseRef;
