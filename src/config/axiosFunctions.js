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
    console.log(response.data, "custom getData function");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateData = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    console.log(response.data, "custom update func data");
    console.log(data, "custom func update data ");
    return response.data;
  } catch (error) {
    throw error;
  }
};
