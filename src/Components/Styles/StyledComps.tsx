import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #a9f7f7, #ffc0cb) !important ;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
`;

export const CarouselContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  right: 20px;
`;

export const EpisodeBox = styled.div`
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgba(255, 255, 255, 0), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  width: fit-content;
  block-size: fit-content;
  max-width: 300px;
  margin: 5rem 5rem;
`;

export const Epinfos = styled.div`
  background: linear-gradient(to right, #008000.200, #ffc0cb.500) !important ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
