import { Posts } from "../../components/Posts/index";
import { Container } from "../../components/ui/Container/index";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFreshPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";

export const MainPage = () => {
  const dispatch = useDispatch()
  const {post} = useSelector((state) => state.posts.postForView);
  const {posts, loading} = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    if(!posts){
      dispatch(getFreshPosts())
    }
  }, [dispatch, posts])

  return (
    <>
      <Container>
        {loading && <Loader/>}
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
