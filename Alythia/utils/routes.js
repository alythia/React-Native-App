import axios from "axios";
import Navigate from "../App.js";

const rootDomain = "https://alythia.herokuapp.com";
// const rootDomain = "http://172.16.23.149:8080";

export const createUser = async (userEmail, userUUID) => {
  try {
    const payload = {
      email: userEmail,
      UUID: userUUID
    };
    const { data } = await axios.post(rootDomain + "/api/users", payload);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const transferData = async (QRCodeData, userEmail, userUUID) => {
  try {
    const { transactionIdentifier, clientIdentifier, website } = JSON.parse(
      QRCodeData
    );

    const payload = {
      transactionIdentifier: transactionIdentifier,
      clientIdentifier: clientIdentifier,
      email: userEmail,
      userIdentifier: userUUID,
      website
    };

    console.log("POSTed to Alythia", payload);

    const { data } = await axios.post(
      `${rootDomain}/api/users/verify/`,
      payload
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
