import axios from "axios";

const API = "https://www.googleapis.com/customsearch/v1?";
const KEY = "AIzaSyA8GNUH0o_mXYb2Gba_hlkHA24bTs5RkpY";
const SEARCH_ENGINE_ID = "f0993fcdd83a64af9";

export default async function getDataGoogle(search) {
  try {
    const response = await axios.get(
      `${API}key=${KEY}&cx=${SEARCH_ENGINE_ID}&q=${search}&searchType=image&num=6`
    );
    return response.data.items;
  } catch (error) {
    const err = new Error(error);
    console.error(err);
  }
}
