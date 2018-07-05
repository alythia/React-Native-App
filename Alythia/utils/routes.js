import axios from 'axios'

// my home remote localhost to use my own iPhone (not simulator)
// const rootDomain = 'http://10.0.1.15:8080'
const rootDomain = 'http://172.16.23.149:8080' //'http://localhost:8080' // TODO: THIS WILL HAVE TO BE A HTTPS
// const rootDomain = 'http://172.16.23.149:8080'

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
      rootDomain + '/api/users/verify/',
      payload
    )

    if (data) {
      setTimeout(() => {
        this.props.navigation.navigate('AuthSuccess')
      }, 1000)
    }

    return data
  } catch (error) {
    console.error(error)
  }
}
