type episode = {
  episodes: {
    episodeList: {
      payload: Array<Object>;
    };
    status: string;
  };
};

const getEpisodesSelector = (state: { data: episode }) => state?.data;
export default getEpisodesSelector;
