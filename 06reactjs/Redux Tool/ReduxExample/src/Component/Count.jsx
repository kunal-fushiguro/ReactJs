import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default Count;
