// import axios from "axios";

export const authAPI = async (url, config) => {
  try {
    const response = await fetch(url, config);
    console.log(response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    console.log(data);
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
