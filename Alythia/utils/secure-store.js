import Expo from 'expo'

// Creates encrypted SecureStore for mobile user
const store = Expo.SecureStore

// Sets key/value pair for email in SecureStore
export const setUserEmail = emailValue => {
  store
    .setItemAsync('email', emailValue, {
      keychainAccessible: ['WHEN_UNLOCKED'] //TODO: This might not be the right was to write this
    })
    .then(() => {
      console.log('Email storage successfull')
    })
    .catch(error => {
      console.log(`Email storage Failed (${error})`)
    })
}

// Retrieves email if it exists, sets email if it does not
export const retrieveOrCreateUserEmail = inputEmailValue => {
  const userStoredEmail = store
    .getItemAsync('email')
    .catch(error => console.log(`Email fetch failed (${error})`))

  if (userStoredEmail === inputEmailValue) {
    return userStoredEmail
  } else {
    setUserEmail(inputEmailValue)
    console.log(`Account created for ${inputEmailValue}`)
  }
}

// Retrieves pin and checks against input pin
export const retrieveAndValidateUserPin = pinValue => {
  const userStoredPin = store
    .getItemAsync('pin')
    .catch(error => console.log(`Pin fetch failed (${error})`))
  return pinValue === userStoredPin
}

// Sets key/value pair for pin (password for app as backup) in SecureStore
export const setUserPin = pinValue => {
  store
    .setItemAsync('pin', pinValue, {
      keychainAccessible: ['WHEN_UNLOCKED'] //TODO: This might not be the right was to write this
    })
    .then(() => {
      console.log('Pin storage successfull')
    })
    .catch(error => {
      console.log(`Pin storage Failed (${error})`)
    })
}
