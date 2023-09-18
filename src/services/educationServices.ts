import axios from "axios";
import { IEducations } from "../models/IEducations";


const URL = 'https://jobed-connect-api.jobtechdev.se/v1/educations?distance=false&filter_education_plan_exists=false';
const params = {
  query: 'frontend',
  limit: 100,
};

export const getEducations = async () => {
  try {
    const response = await axios.get<IEducations>(URL, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error)
  }
}

