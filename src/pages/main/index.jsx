import { Posts } from "../../components/Posts/index";
import { Container } from "../../components/ui/Container/index";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
  const dispatch = useDispatch()
  const {post} = useSelector((state) => state.posts.postForView);
  const {posts, loading} = useSelector((state) => state.posts.freshPosts);
  

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [dispatch])

  return (
    <>
      <Container>
        {loading && <>Loading...</>}
        {posts && (
          <>
            <Typo>Свежие публикации</Typo>
            <Posts posts={posts} />
          </>
        )}
        {post && (
          <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]} />
          </>
        )}
      </Container>
    </>
  );
};
