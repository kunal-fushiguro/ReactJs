import { useRef, useState, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popUp = useRef();
  const button = useRef();
  useLayoutEffect(() => {
    if (popUp.current == null || button.current == null) {
      return;
    }
    const { bottom } = button.current.getBoundingClientRect();
    popUp.current.style.top = `${bottom + 25}px`;
  }, [show]);
  return (
    <>
      <div>
        <button ref={button} onClick={() => setShow((perv) => !perv)}>
          Click
        </button>
        {show && (
          <div style={{ position: "absolute" }} ref={popUp}>
            this is pop up
          </div>
        )}
      </div>
    </>
  );
};

export default UseLayoutEffect;
