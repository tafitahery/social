import { useQuery } from "@tanstack/react-query";
import Post from "../post/Post";
import "./posts.scss";
import { makeRequest } from "../../axios";

export default function Posts() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts").then((res) => res.data),
  });

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
