// Show.js
import React from "react";
import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CarouselContainer, EpisodeBox, Epinfos } from "../Styles/StyledComps";
import { Link as RouterLk } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 3,
  },
  desk2: {
    breakpoint: { max: 1024, min: 720 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 720, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveFonttitle = {
  base: "5xl",
  sm: "6xl",
  md: "7xl",
  lg: "8xl",
  xl: "9xl",
};
const responsivetext = {
  base: "sm",
  sm: "md",
  md: "lg",
  lg: "xl",
  xl: "xl",
};
type ShowProps = {
  payload: Array<Object>;
  title: string;
  summary: string;
  genres: Array<string>;
  premiered: string;
  rating: number;
  officialSite: string;
};

function Show(props: ShowProps) {
  const { title, summary, payload, genres, premiered, rating, officialSite } =
    props;

  return (
    <Flex
      position={"relative"}
      flexDir={"row"}
      justify={"flex-end"}
      className="show-infos"
      align={"flex-start"}
      top={50}
    >
      <Flex
        pt={100}
        flexDir={"row"}
        justify={"flex-start"}
        align={"flex-start"}
        h={"100%"}
        w={"100%"}
        overflow={"hidden"}
      >
        <Box minW={{ base: "5%", md: "5%", lg: "0%", xl: "0%" }} h={"100px"} />
        <Flex
          display={"flex"}
          justifyContent={"flex-end"}
          height={"100%"}
          flexDir={["column", "column", "row", "row"]}
          alignItems={"flex-end"}
          className="infos"
          position={"relative"}
          gap={30}
          top={200}
          mt={{ base: 5, sm: 8, md: 10, lg: 0 }}
          ml={{ base: 10, sm: 10, md: 20 }}
          mr={{ base: 10, sm: 10, md: 20 }}
          h={{ base: 100, sm: 320, md: 150, lg: 300 }}
        >
          <Heading
            h={"auto"}
            fontWeight="700"
            textTransform="uppercase"
            fontSize={responsiveFonttitle}
            letterSpacing="wide"
            color="white"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            {title}
          </Heading>
          <Flex flexDir={"column"} gap={5}>
            <Text
              fontWeight="normal"
              fontSize={responsivetext}
              letterSpacing="wide"
              color="white"
              textOverflow="ellipsis"
            >
              Genres:{`  ${genres?.[0]}, ${genres?.[1]}`}
            </Text>
            <Text
              fontWeight="normal"
              fontSize={responsivetext}
              letterSpacing="wide"
              color="white"
              textOverflow="ellipsis"
            >
              Premiered : {premiered}
            </Text>
            <Text
              fontWeight="normal"
              fontSize={responsivetext}
              letterSpacing="wide"
              color="white"
              textOverflow="ellipsis"
            >
              Rating : {rating}
            </Text>
            <Text
              fontWeight="normal"
              fontSize={responsivetext}
              letterSpacing="wide"
              color="white"
              textOverflow="ellipsis"
            >
              Official Site :
              <Link href={officialSite} isExternal>
                {officialSite} <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
            <Text
              fontWeight="normal"
              fontSize={responsivetext}
              letterSpacing="wide"
              color="white"
              dangerouslySetInnerHTML={{ __html: summary }}
              textOverflow="ellipsis"
            />
          </Flex>
        </Flex>
      </Flex>
      <Box
        className="carousel"
        h={{ base: 300, sm: 70, md: 300, lg: 200, xl: 300 }}
        mt={{ base: 200, sm: 270, md: 540, lg: 630, xl: 300 }}
      >
        <CarouselContainer>
          <Carousel responsive={responsive}>
            {payload?.map((item: any, idx: any) => {
              return (
                <RouterLk
                  to={`/episode/${item.id}`}
                  key={item.id}
                  className="link"
                >
                  <EpisodeBox className="episode">
                    <img src={item?.image?.medium} alt="img" />
                    <Epinfos className="episode-info-container">
                      <h1> S{item?.season} -</h1>
                      <h1>EP{item?.number}</h1>
                    </Epinfos>
                  </EpisodeBox>
                </RouterLk>
              );
            })}
          </Carousel>
        </CarouselContainer>
      </Box>
    </Flex>
  );
}

export default Show;
