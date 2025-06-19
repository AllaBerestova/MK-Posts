import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      title: "post 1",
      image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi.",
    },
    {
      id: 2,
      title: "post 2",
      image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
      text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi.",
    },
    {
      id: 3,
      title: "post 3",
      image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
      text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi.",
    },
    {
      id: 4,
      title: "post 4",
      image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
      text: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi.",
    },
    {
      id: 5,
      title: "post 5",
      image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/173/285/428/152/417/16/600006831198b1.jpeg",
      text: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ea dolorem inventore eaque tempora praesentium soluta culpa natus aperiam, harum commodi quidem, quis expedita? Iusto perspiciatis dolorem eaque sequi.",
    },
  ],
  postForView: null,
  freshPosts: null
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {},
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload);
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0,3)
    },
    addPost: (state, action) => {},
  },
});

export const { setPosts, editPost, getPost, addPost, getFreshPosts } = postsSlice.actions;
export default postsSlice.reducer;
