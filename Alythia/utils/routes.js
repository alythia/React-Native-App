import axios from "axios";

// my home remote localhost to use my own iPhone (not simulator)
<<<<<<< HEAD
const rootDomain = 'http://10.0.1.15:8080'
// const rootDomain = 'http://172.16.23.149:8080'
// const rootDomain = 'http://alythia.herokuapp.com' // TODO: THIS WILL HAVE TO BE A HTTPS
=======
// const rootDomain = 'http://10.0.1.15:8080'
const rootDomain = "http://172.16.23.149:8080"; //'http://localhost:8080' // TODO: THIS WILL HAVE TO BE A HTTPS
// const rootDomain = 'http://172.16.23.149:8080'
>>>>>>> b6d3157e55a4e42b523faa3c0fdd58b0ef365459

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
<<<<<<< HEAD
    const { transactionIdentifier, clientIdentifier } = JSON.parse(QRCodeData)
=======
    const { transactionIdentifier, clientIdentifier } = JSON.parse(QRCodeData);

>>>>>>> b6d3157e55a4e42b523faa3c0fdd58b0ef365459
    const payload = {
      transactionIdentifier: transactionIdentifier,
      clientIdentifier: clientIdentifier,
      email: userEmail,
      userIdentifier: userUUID
    };
    console.log("POSTed to Alythia", payload);
    const { data } = await axios.post(
<<<<<<< HEAD
      rootDomain + '/api/users/verify/',
      payload
    )
    console.log('transferData res: ', data)
    return data
=======
      rootDomain + "/api/users/verify/",
      payload
    );

    return data;
>>>>>>> b6d3157e55a4e42b523faa3c0fdd58b0ef365459
  } catch (error) {
    console.error(error);
  }
};
