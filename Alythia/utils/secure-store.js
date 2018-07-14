import Expo from 'expo';
import uuidv4 from 'uuid/v4';

// Creates encrypted SecureStore for mobile user
export const store = Expo.SecureStore;

// Sets key/value pair for email in SecureStore
export const setUserEmail = emailValue => {
  store
    .setItemAsync(
      'email',
      emailValue 
    )
    .then(() => {
      console.log('Email storage successfull');
    })
    .catch(error => {
      console.log(`Email storage Failed (${error})`);
    });
};

// Retrieves email if it exists, sets email if it does not
export const retrieveUserEmail = async () => {
  try {
    const userStoredEmail = await store.getItemAsync('email');
    console.log(userStoredEmail)
    return userStoredEmail.toString();
  } catch (e) {
    console.log(`Email fetch failed (${e})`);
  }
};

// Retrieves pin and checks against input pin
export const retrieveAndValidateUserPin = async pinValue => {
  try {
    const userStoredPin = await store.getItemAsync('pin');
    console.log('IN case you forgot: your pin is:', userStoredPin)
    return pinValue === userStoredPin;
  } catch (e) {
    console.log(`Pin fetch failed (${e})`);
  }
};

// Sets key/value pair for pin (password for app as backup) in SecureStore
export const setUserPin = pinValue => {
  store
    .setItemAsync(
      'pin',
      pinValue 
    )
    .then(() => {
      console.log('Pin storage successfull');
    })
    .catch(error => {
      console.log(`Pin storage Failed (${error})`);
    });
};

export const setUserUUID = () => {
  const userUUID = uuidv4();
  store
    .setItemAsync(
      'userUUID',
      userUUID 
    )
    .then(() => {
      console.log('UUID storage successfull');
    })
    .catch(error => {
      console.log(`UUID storage Failed (${error})`);
    });
};

export const retrieveUserUUID = async () => {
  try {
    const userUUID = await store.getItemAsync('userUUID');
    return userUUID;
  } catch (error) {
    console.log(`userUUID fetch failed (${error})`);
  }
};

export const deleteUser = async () => {
  console.log('User deleted');
  try {
    await store.deleteItemAsync('pin');
    await store.deleteItemAsync('email');
  } catch (error) {
    console.log(error);
  }
};
