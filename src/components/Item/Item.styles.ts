import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    max-width: 100%;
    object-fit: contain;
    border-radius: 0 0 20px 20px;
  }

  div {
    font-family: 'Arial', sans-serif;
    padding: 1rem;
    height: 100%;
  }
`