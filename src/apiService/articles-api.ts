import axios from "axios";
import { UnsplashSearchResponse } from "../components/App/App.types";

const API_KEY = "k8i1H239r5K4ALBVTFvwlJvdYEUFhownQy3kYDvve-o";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export const fetchImagesWithTopic = async (
  query: string,
  page: number = 1
): Promise<UnsplashSearchResponse> => {
  const { data } = await axios.get<UnsplashSearchResponse>(`search/photos`, {
    params: {
      query,
      page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return data;
};
