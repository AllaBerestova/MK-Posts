import { Container } from "../../components/Container";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";

export const INITIAL_POSTS = [
  {
    id: 1,
    title: "post 1",
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi."
  },
  {
    id: 2,
    title: "post 2",
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
    text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi."
  },
  {
    id: 3,
    title: "post 3",
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
    text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi."
  },
];

export const PostsPage = () => (
  <>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
