import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: black;
  border: 1px solid white;
  border-radius: 15px;
  padding: 25px;
  background: #FEFEFD;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;