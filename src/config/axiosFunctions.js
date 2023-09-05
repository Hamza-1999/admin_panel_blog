import axios from "axios";

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    if (response.status === 200) {
      return await response.data;
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    throw error;
  }
};

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data, "custom getData function");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateData = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    throw error;
  }
};
