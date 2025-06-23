import { Link } from "../../../ui/Link";
import * as SC from "./styles";

export const Post = ({ post }) => {
  const image = post.image || 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg'
  return (
  <SC.Post>
    <SC.Image src={image} alt={post.title}></SC.Image>
    <SC.Title>{post.title}</SC.Title>
    <Link to={`/posts/${post.id}`}>Читать полностью</Link>
  </SC.Post>
  )
  
};
