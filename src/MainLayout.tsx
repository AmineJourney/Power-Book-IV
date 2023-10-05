// MainLayout.js
import React, { useEffect } from "react";
import { Outlet, useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./Store/index";
import { getEpisodes, getEpisodesFulfilled } from "./Store/Slice/EpisodesSlice";
import { getShow, getShowFulfilled } from "./Store/Slice/ShowSlice";
import Error from "./Components/Error";
import Show from "./Components/Home/show";
import StatusCode from "./Store/Status";
import { Flex } from "@chakra-ui/react";

type State = {
  show: {
    show: {
      payload: {
        image: {
          original: string;
        };
        name: string;
        summary: string;
        genres: Array<string>;
        premiered: string;
        rating: {
          average: number;
        };
        officialSite: string;
      };
    };
  };

  episodes: {
    eps: {
      payload: Array<Object>;
    };
    status: string;
  };
};

function MainLayout() {
  let match = useMatch("/");
  const dispatch = useDispatch<AppDispatch>();
  const { show } = useSelector((state: State) => state.show);
  const { eps, status } = useSelector((state: State) => state.episodes);

  useEffect(() => {
    dispatch(getEpisodes()).then((result) => {
      dispatch(getEpisodesFulfilled(result));
    });
  }, [dispatch]);
  useEffect(() => {
    dispatch(getShow()).then((result) => {
      dispatch(getShowFulfilled(result));
    });
  }, [dispatch]);

  if (status === StatusCode.SUCCESS_EPS)
    return (
      <>
        <Flex
          h={"100%"}
          w={"100%"}
          direction={"row"}
          position={"absolute"}
          bgGradient="linear(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)"
        >
          <Flex
            position={"absolute"}
            bgImage={show?.payload?.image?.original}
            w={"65%"}
            h={"100%"}
            gap={0}
            bgSize={"cover"}
            objectFit={"fill"}
            bgRepeat={"no-repeat"}
            zIndex={-1}
            border={"0px"}
          />

          {match ? (
            <Show
              payload={eps.payload}
              title={show?.payload?.name}
              summary={show?.payload?.summary}
              genres={show?.payload?.genres}
              premiered={show?.payload?.premiered}
              rating={show?.payload?.rating?.average}
              officialSite={show?.payload?.officialSite}
            />
          ) : (
            <Outlet />
          )}
        </Flex>
      </>
    );
  if (status === StatusCode.ERROR_S) return <Error />;
  else
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
}

export default MainLayout;
