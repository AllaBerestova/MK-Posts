import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import * as SC from "./styles";
import { Link } from "../../../components/Link";
import { getPostById, showPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = list ? list.find((item) => item.id === intId) : undefined;
    if (findedPosts) {
      dispatch(showPost(findedPosts));
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  if (postForView.loading) {
    return <Container>Loading...</Container>;
  }

  if (!postForView.post || !postForView.post.hasOwnProperty("id")) {
    return <div>Пост не найден</div>;
  }

  const { post } = postForView;
  const image =
    post.image || "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg";

  return (
    <Container>
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title}></SC.Image>
      <SC.Text>{post.body}</SC.Text>
      <div style={{ clear: "both" }}></div>
      <SC.LinkWrapper>
        <Link to={"/posts"}>Обратно к публикациям</Link>
        <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
