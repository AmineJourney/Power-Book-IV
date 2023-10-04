import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

type state = {
  episodes: {
    eps: {
      payload: Array<Object>;
    };
    status: string;
  };
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

function Details() {
  const { id } = useParams();
  const { eps } = useSelector((state: state) => state.episodes);
  console.log(eps.payload, "episodes");

  return (
    <>
      {eps?.payload?.map((item: any, idx) => {
        if (item?.id == id) {
          console.log("item", item);
          return (
            <div key={idx} className="episode-info">
              <Flex
                h={"100%"}
                w={"100%"}
                direction={"row"}
                position={"absolute"}
                alignItems={"flex-end"}
                justify={"flex-start"}
                bgGradient="linear(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)"
              >
                <Flex
                  position={"absolute"}
                  bgImage={item?.image?.original}
                  w={"100%"}
                  h={"100vh"}
                  gap={0}
                  bgSize={"cover"}
                  objectFit={"fill"}
                  bgRepeat={"no-repeat"}
                  zIndex={-1}
                ></Flex>
                <Button
                  zIndex={5}
                  bottom={20}
                  left={20}
                  size={"lg"}
                  position={"relative"}
                >
                  <Link to={"/"}>Return</Link>
                </Button>
              </Flex>
              <Flex
                pt={100}
                flexDir={"row"}
                justify={"flex-start"}
                align={"flex-start"}
                h={"100%"}
                w={"100%"}
                zIndex={3}
              >
                <Box
                  minW={{ base: "5%", md: "5%", lg: "0%", xl: "0%" }}
                  h={"100px"}
                />
                <Flex
                  display={"flex"}
                  justifyContent={"flex-end"}
                  height={"100%"}
                  flexDir={["column", "column", "row", "row"]}
                  alignItems={"flex-end"}
                  className="ep-infos"
                  position={"relative"}
                  gap={30}
                  top={200}
                  mt={{ base: 5, sm: 8, md: 10, lg: 20, xl: 40 }}
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
                    {item?.name}
                  </Heading>
                  <Flex flexDir={"column"} gap={5}>
                    <Text
                      fontWeight="normal"
                      fontSize={responsivetext}
                      letterSpacing="wide"
                      color="white"
                      textOverflow="ellipsis"
                    >
                      {`episode ${item?.number} season ${item?.season}`}
                    </Text>
                    <Text
                      fontWeight="normal"
                      fontSize={responsivetext}
                      letterSpacing="wide"
                      color="white"
                      textOverflow="ellipsis"
                    >
                      Air Date : {item?.airdate}
                    </Text>
                    <Text
                      fontWeight="normal"
                      fontSize={responsivetext}
                      letterSpacing="wide"
                      color="white"
                      textOverflow="ellipsis"
                    >
                      Rating : {item?.rating?.average}
                    </Text>

                    <Text
                      fontWeight="normal"
                      fontSize={responsivetext}
                      letterSpacing="wide"
                      color="white"
                      dangerouslySetInnerHTML={{ __html: item?.summary }}
                      textOverflow="ellipsis"
                    />
                  </Flex>
                </Flex>
              </Flex>
            </div>
          );
        }
      })}
    </>
  );
}

export default Details;
