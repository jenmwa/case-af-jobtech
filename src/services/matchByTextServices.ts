import axios from "axios";
import { ISearchByText } from "../models/ISearchByText";

const URL =
  "https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text";

export const matchByText = async (search: ISearchByText) => {
  const config = {
    url: URL,
    method: "POST",
    data: {
      input_text: search.input_text,
      input_headline: search.input_headline,
      limit: search.limit || 10,
      offset: search.offset || 0,
      included_metadata: search.include_metadata || false,
    },
  };

  const response = await axios(config);

  return response.data;
};
