import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;
export const LoaderElement = styled.div`
  background-color: #1b5277;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  animation: bounce 1s infinite ease-in-out;

  &:nth-child(2){
    animation-delay: -1s;
  }
  &:nth-child(3){
    animation-delay: -0.5s;
  }
  @keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
`;
