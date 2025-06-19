import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import * as SC from "./styles";
import { Link } from "../../../components/Link";
import { getPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const postForView = useSelector((state) => state.posts.postForView)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getPost(Number(id)))
  }, [id])

  if (!postForView) {
    return <div>Пост не найден</div>;
  }

  return (
    <Container>
      <Typo>{postForView.title}</Typo>
      <SC.Image src={postForView.image} alt={postForView.title}></SC.Image>
      <SC.Text>{postForView.text}</SC.Text>
      <div style={{ clear: "both" }}></div>
      <SC.LinkWrapper>
        <Link to={"/posts"}>Обратно к публикациям</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
