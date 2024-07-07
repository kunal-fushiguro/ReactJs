# React Query

### Installation

```
npm i react-query
```

### Warp Application with `QueryClientProvider` and create a instance of `QueryClient` and pass it as a props name `client`

```
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>
```

### Import `useQuery` hook to fetch data and handle error, loading and data

```
 const { data: postData,isLoading,isError,error, } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPosts,
  });

 const fetchPosts = async (page) => {
  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id&${
      page ? `_page=${page}&_per_page=5` : ""
    }`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const postData = await response.json();
  return postData;
};

```

`jsx` code

```
    <div className="container">
        <h1>POST LIST</h1>
        {isLoading && <p>loading.............</p>}
        {isError && <p>{error?.message}</p>}
        {postData?.map((post) => {
          return (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              {post.tags.map((tag) => {
                return <span key={tag}>{tag}</span>;
              })}
            </div>
          );
        })}
    </div>
```

### Import `useMutation` hoko to do `POST` request to add new data

```
    const { mutate,isPending,isError:isPostError,reset} = useMutation({
        mutationFn: addPost,
    });

    const addPost = async (post) => {
        const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        return response.json();
    };

    const { data: tagsData, isLoading: isTagsLoading } = useQuery({
        queryKey: ["tags"],
        queryFn: fetchTags,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const tags = Array.from(formData.keys()).filter(
          (key) => formData.get(key) === "on"
        );

        if (!title || !tags) return;

        mutate({ id: postData?.items + 1, title, tags });

        e.target.reset();
    };
```

`jsx` code

```
    <div className="container">
        <form onSubmit={handleSubmit}>
          {isPostError && <h5 onClick={() => reset()}>Unable to Post</h5>}
          <input
            type="text"
            placeholder="Enter your post.."
            className="postbox"
            name="title"
          />
          <div className="tags">
            {tagsData?.map((tag) => {
              return (
                <div key={tag}>
                  <input name={tag} id={tag} type="checkbox" />
                  <label htmlFor={tag}>{tag}</label>
                </div>
              );
            })}
          </div>
          <button disabled={isPending}>
            {isPending ? "Posting..." : "Post"}
          </button>
        </form>
      </div>

```
