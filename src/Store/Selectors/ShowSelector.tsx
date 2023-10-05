type ShowInfos = {
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
};
const getShowSelector = (state: { data: ShowInfos }) => state?.data;
export default getShowSelector;
