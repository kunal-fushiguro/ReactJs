import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "react-query";
import { fetchPosts } from "./api/api";
import PostList from "./component/PostList";

function App() {
  const [count, setCount] = useState(0);
  // const { data, status, isLoading, isError, error } = useQuery({
  //   queryKey: ["post"],
  //   queryFn: fetchPosts,
  // });

  // console.log(data, status, isLoading, isError, error);
  return (
    <>
      <div>
        <PostList />
      </div>
    </>
  );
}

export default App;
