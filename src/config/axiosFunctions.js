import axios from "axios";

export const postData = async (api, body) => {
    const response = await axios.request({
        method:"POST",
        url:api,
        data:body
    })
    return response.data
}

// export const getData = async () => {
//     try {
//         const response = await axios.get(path);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
//   };