import React from "react";
import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import TheCarousel from "./TheCarousel";
import "react-multi-carousel/lib/styles.css";

const responsiveFonttitle = {
  base: "4xl",
  sm: "5xl",
  md: "6xl",
  lg: "7xl",
  xl: "8xl",
  "2xl": "9xl",
};
const responsivetext = {
  base: "sm",
  sm: "sm",
  md: "lg",
  lg: "xl",
  xl: "2xl",
  "2xl": "2xl",
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
      flexDir={"column"}
      w={"100%"}
      justify={"flex-start"}
      className="show-infos"
      align={"center"}
      overflow={"hidden"}
      height={"100%"}
      pt={100}
    >
      <Flex
        flexDir={"row"}
        align={"center"}
        h={"auto"}
        w={"100%"}
        overflow={"hidden"}
      >
        <Flex
          justifyContent={"start"}
          height={"auto"}
          flexDir={["column", "column", "row", "row"]}
          alignItems={"flex-end"}
          className="infos"
          position={"relative"}
          gap={30}
          mt={{ base: 5, sm: 8, md: 0, lg: 0 }}
          ml={{ base: 10, sm: 10, md: 20 }}
          mr={{ base: 10, sm: 10, md: 20 }}
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
          <Flex
            flexDir={"column"}
            gap={{ base: 1, xl: 5 }}
            justify={"flex-end"}
          >
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
        position={"relative"}
        overflowX={"visible"}
        w={"100%"}
        h={"auto"}
        mt={{ base: 10, sm: 50, md: 40, lg: 30, xl: 50, "2xl": "100" }}
      >
        <TheCarousel episodes={payload} />
      </Box>
    </Flex>
  );
}

export default Show;
