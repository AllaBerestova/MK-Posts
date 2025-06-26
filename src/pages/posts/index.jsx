import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/ui/Typo";
import { useEffect, useState } from "react";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";
import { Search } from "../../components/Search";
import { Sort } from "../../components/Sort";
import * as SC from './styles'

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("Без сортировки"); 

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, [list, dispatch]);

  if (!list && loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!list) {
    return <Container>404</Container>;
  }

  const handleSearch = (value) => {
    setSearchValue(value);
  };

   const handleSort = (order) => { 
    setSortOrder(order);
  };

  let filteredPosts = list.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));

  const sortedPosts = () => {
    let sorted = [...filteredPosts]; 

    switch (sortOrder) {
      case "От А до Я":
        sorted.sort((a, b) => a.title.localeCompare(b.title)); 
        break;
      case "От Я до А":
        sorted.sort((a, b) => b.title.localeCompare(a.title)); 
        break;
      case "Без сортировки":
        break;
      default:
        break;
    }

    return sorted;
  }
  return (
    <>
      <Container>
        <Typo>Публикации</Typo>
        <SC.SortAndSearch>
          <Search onSearch={handleSearch} />
          <Sort onSort={handleSort}/>
        </SC.SortAndSearch>
        <Posts posts={sortedPosts()} />
      </Container>
    </>
  );
};
