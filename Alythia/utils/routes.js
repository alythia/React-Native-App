import axios from "axios";

const URL = "http://172.16.23.149:8080/api/test-qr";

const transferData = async (QRCodeData, userEmail, userIdentifier) => {
  try {
    const payload = {
      data: QRCodeData,
      email: userEmail,
      identifier: userIdentifier
    };
    const { data } = await axios.post(URL, payload);
    console.log("transferData Response: ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const initiateDataTransfer = async (QRCodeData, userEmail) => {
  try {
    const { data } = await axios.get(URL);
    console.log("Data transfer initiated, token received: ", data);
    transferData(QRCodeData, userEmail, data);
  } catch (error) {
    console.error(error);
  }
};
