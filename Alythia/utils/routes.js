import axios from 'axios'

// my home remote localhost to use my own iPhone (not simulator)
const rootDomain = 'http://10.0.1.15:8080' // TODO: THIS WILL HAVE TO BE A HTTPS
// const rootDomain = 'http://172.16.23.149:8080'

export const createUser = async (userEmail, userUUID) => {
  try {
    const payload = {
      email: userEmail,
      UUID: userUUID,
    }
    console.log('HERE IS POST PAYLOAD: ', payload)
    const { data } = await axios.post(rootDomain + '/api/users', payload)
    console.log('User added res: ', data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const transferData = async (QRCodeData, userEmail, userUUID) => {
  try {
    const { transactionIdentifier, clientIdentifier } = QRCodeData
    const payload = {
      transactionIdentifier: transactionIdentifier,
      clientIdentifier: clientIdentifier,
      email: userEmail,
      userIdentifier: userUUID,
    }
    const { data } = await axios.post(
      rootDomain + '/api/users/verify/',
      transactionIdentifier
    )
    console.log('transferData res: ', data)
    return data
  } catch (error) {
    console.error(error)
  }
}
