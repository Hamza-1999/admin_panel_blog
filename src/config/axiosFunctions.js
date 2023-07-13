import axios from "axios";

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    console.log(response.data, "custom func data");
    return await response.data;
  } catch (error) {
    throw error;
  }
};

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data, "get custom func data");
    return await response.data;
  } catch (error) {
    throw error;
  }
};
