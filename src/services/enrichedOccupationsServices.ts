import axios from "axios";
import { IEnrichedOccupation } from "../models/IEnrichedOccupation";

const URL = "https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations";

export const enrichedOccupation = async (search: IEnrichedOccupation) => {
  const config = {
    url: URL,
    method: "GET",
    params: {
      occupation_id: search.occupation_id,
      include_metadata: search.include_metadata || false,
    },
  };
  const response = await axios(config);
  return response.data;
};
