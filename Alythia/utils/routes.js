import axios from 'axios'

const rootDomain = "http://alythia.herokuapp.com";

export const createUser = async (userEmail, userUUID) => {
  try {
    const payload = {
      email: userEmail,
      UUID: userUUID,
    }
    const { data } = await axios.post(rootDomain + '/api/users', payload)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const transferData = async (QRCodeData, userEmail, userUUID) => {
  try {
    const { transactionIdentifier, clientIdentifier } = JSON.parse(QRCodeData)

    const payload = {
      transactionIdentifier: transactionIdentifier,
      clientIdentifier: clientIdentifier,
      email: userEmail,
      userIdentifier: userUUID,
    }
    console.log('POSTed to Alythia', payload)
    const { data } = await axios.post(
      "https://alythia.herokuapp.com/api/users/verify/",
      payload
    )

    if (data) {
      setTimeout(() => {
        this.props.navigation.navigate('Scanner')
      }, 1000)
    }

    return data

  } catch (error) {
    console.error(error)
  }
}
