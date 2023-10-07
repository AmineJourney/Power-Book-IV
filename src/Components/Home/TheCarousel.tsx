import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { EpisodeBox, Epinfos } from "../Styles/StyledComps";
import { Link as RouterLk } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1025 },
    items: 3,
  },
  desk2: {
    breakpoint: { max: 1024, min: 721 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 720, min: 465 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
type carouselProps = {
  episodes: Array<Object>;
};

export default function TheCarousel({ episodes }: carouselProps) {
  return (
    <Carousel responsive={responsive} itemClass="carousel-object">
      {episodes?.map((item: any) => (
        <RouterLk
          to={`/episode/${item.id}`}
          key={item.id}
          className="episode-link"
          style={{ height: "100%", width: "100%" }}
        >
          <EpisodeBox className="episode">
            <img src={item?.image?.medium} alt="img" />
            <Epinfos className="episode-info-container">
              <Text color={"whiteAlpha.900"} fontSize={"md"}>
                S{item?.season} -
              </Text>
              <Text color={"whiteAlpha.900"} fontSize={"md"}>
                EP{item?.number}
              </Text>
            </Epinfos>
          </EpisodeBox>
        </RouterLk>
      ))}
    </Carousel>
  );
}
