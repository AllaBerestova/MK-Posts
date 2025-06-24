import { Post } from "./components/Post";
import * as SC from "./styles";
import { useState } from "react";
import { Pagination } from "../Pagination";

export const Posts = ({ posts }) => {
  const list = posts || [];
  const [page, setPage] = useState(1);
  const perPage = 10;
  const totalPages = Math.ceil(list.length / perPage);
  const lasIndexPage = page * perPage;
  const firstIndexPage = lasIndexPage - perPage;
  const currentPosts = list.slice(firstIndexPage, lasIndexPage);

  const pageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <SC.Posts>
        {currentPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </SC.Posts>
      <Pagination onPageChange={pageChange} totalPages={totalPages} page={page}></Pagination>
    </>
  );
};
