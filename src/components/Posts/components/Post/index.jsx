import * as SC from "./styles";

export const Post = ({ post }) => (
  <SC.Post>
    <SC.Image src={post.image} alt={post.title}></SC.Image>
    <SC.Title>{post.title}</SC.Title>
    <SC.DetailLink to={`/posts/${post.id}`}>Читать полностью</SC.DetailLink>
  </SC.Post>
);
