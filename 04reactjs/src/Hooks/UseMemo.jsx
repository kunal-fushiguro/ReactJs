import { useMemo, useState } from "react";

const UseMemo = () => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [total, setTotal] = useState(0);
  //   without usememo
  //    in console.log you can see that hello is printing again again when yo click on button but after using useMemo it will not print hello until you change the value
  //   const addFn = () => {
  //     for (let i = 0; i < 1000; i++) {
  //       console.log("hello");
  //     }
  //     setTotal(value + value2);
  //   };
  const addFn = useMemo(() => {
    for (let i = 0; i < 1000; i++) {
      console.log("hello");
    }
    let totalval = value + value2;
    setTotal(totalval);
  }, [value, value2]);
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={addFn}>Sum</button>
      <span>{total}</span>
    </div>
  );
};

export default UseMemo;
