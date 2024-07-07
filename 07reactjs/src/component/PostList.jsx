import React from "react";
import { useMutation, useQuery } from "react-query";
import { fetchPosts, addPost, fetchTags } from "../api/api";

const PostList = () => {
  // fetching post
  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPosts,
  });

  // feteching tags
  const { data: tagsData, isLoading: isTagsLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  // post method
  const {
    mutate,
    isPending,
    isError: isPostError,
    reset,
  } = useMutation({
    mutationFn: addPost,
  });

  // add post request function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );

    if (!title || !tags) return;

    mutate({ id: postData?.items + 1, title, tags });

    e.target.reset(); // reset form
  };
  return (
    <>
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
    </>
  );
};

export default PostList;
