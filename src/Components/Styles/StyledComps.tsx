import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  right: 20px;
  border-radius: 4px;
`;

export const EpisodeBox = styled.div`
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgba(255, 255, 255, 0), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  width: fit-content;
  block-size: fit-content;
  min-width: 400px;
  margin: 5rem 5rem;
  border-radius: 10px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  & :hover {
    scale: 110%;
    transition: all 0.4s ease;
  }
`;

export const Epinfos = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
