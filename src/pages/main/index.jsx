import { Posts } from "../../components/Posts/index";
import { Container} from '../../components/Container/index'
import { Typo } from "../../components/Typo";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "post 1",
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
  },
  {
    id: 2,
    title: "post 2",
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
  },
  {
    id: 3,
    title: "post 3",
    image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
  },
];

export const MainPage = () => (
  <>
  <Container>
    <Typo>Свежие публикации</Typo>
    <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
