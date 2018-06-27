import axios from 'axios'

const rootDomain = 'http://localhost:8080'
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
    const payload = {
      data: QRCodeData,
      email: userEmail,
      UUID: userUUID,
    }
    const { data } = await axios.post(rootDomain + '/api/test-qr', payload)
    console.log('transferData res: ', data)
    return data
  } catch (error) {
    console.error(error)
  }
}
