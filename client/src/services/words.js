import axios from "axios";

const baseUrl = "/API";

const getAll = async () => {
  const response = await axios.get(baseUrl + "/allwords");
  return response.data;
};

const getSingleWord = async (word) => {
  const response = await axios.get(baseUrl + "/word/" + word);
  return response.data;
};

const exportedObject = { getAll, getSingleWord };

export default exportedObject;
