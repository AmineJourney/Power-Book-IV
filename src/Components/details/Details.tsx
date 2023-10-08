import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AppDispatch } from "../../Store/index";
import {
  getEpisodes,
  getEpisodesFulfilled,
} from "../../Store/Slice/EpisodesSlice";

type Episodes = {
  episodes: {
    episodeList: {
      payload: Array<Object>;
    };
    status: string;
  };
};

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

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { episodeList } = useSelector((state: Episodes) => state.episodes);
  useEffect(() => {
    dispatch(getEpisodes()).then((result) => {
      dispatch(getEpisodesFulfilled(result));
    });
  }, [dispatch]);

  return (
    <>
      {episodeList?.payload?.map((item: any, idx) => {
        return (
          item?.id.toString() === id && (
            <div key={idx} className="episode-info">
              <Flex
                h={"100%"}
                w={"100%"}
                direction={"row"}
                position={"absolute"}
                alignItems={"flex-end"}
                justify={"flex-start"}
                bgGradient={{
                  xl: "linear(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)",
                }}
              >
                <Flex
                  position={"absolute"}
                  bgImage={item?.image?.original}
                  w={{ base: "100%", xl: "65%" }}
                  h={"100svh"}
                  gap={0}
                  bgSize={"cover"}
                  objectFit={"none"}
                  bgRepeat={"no-repeat"}
                  zIndex={-1}
                ></Flex>
                <Button
                  zIndex={5}
                  bottom={{ base: 10, xl: 20 }}
                  left={20}
                  size={"lg"}
                  position={"relative"}
                >
                  <Link to={"/"}>Return</Link>
                </Button>
              </Flex>
              <Flex
                pt={{ base: 100, sm: 200, md: 0, lg: 0, xl: 0 }}
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
                  justifyContent={"start"}
                  height={"auto"}
                  flexDir={["column", "column", "column", "row"]}
                  alignItems={"flex-end"}
                  className="ep-infos"
                  position={"relative"}
                  gap={30}
                  mt={{ base: 5, sm: 8, md: 20, lg: 20, xl: 40 }}
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
                    {item?.name}
                  </Heading>
                  <Flex flexDir={"column"} gap={{ base: 1, xl: 5 }}>
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
          )
        );
      })}
    </>
  );
}

export default Details;
