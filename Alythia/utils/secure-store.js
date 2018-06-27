import Expo from "expo";

// Creates encrypted SecureStore for mobile user
const store = Expo.SecureStore;

// Sets key/value pair for email in SecureStore
export const setUserEmail = emailValue => {
  console.log("This is set email: ", emailValue);
  store
    .setItemAsync(
      "email",
      emailValue //, {
      //   keychainAccessible: ["WHEN_UNLOCKED"] //TODO: This might not be the right was to write this
      // })
    )
    .then(() => {
      console.log("Email storage successfull");
    })
    .catch(error => {
      console.log(`Email storage Failed (${error})`);
    });
};

// Retrieves email if it exists, sets email if it does not
export const retrieveUserEmail = async inputEmailValue => {
  try {
    const userStoredEmail = await store.getItemAsync("email");

    if (userStoredEmail === inputEmailValue) {
      return userStoredEmail;
    } else {
      console.log(`Email address does not match account: ${inputEmailValue}`);
    }
  } catch (e) {
    console.log(`Email fetch failed (${e})`);
  }
};

// Retrieves pin and checks against input pin
export const retrieveAndValidateUserPin = async pinValue => {
  try {
    const userStoredPin = await store.getItemAsync("pin");
    return pinValue === userStoredPin;
  } catch (e) {
    console.log(`Pin fetch failed (${e})`);
  }
};

// Sets key/value pair for pin (password for app as backup) in SecureStore
export const setUserPin = pinValue => {
  store
    .setItemAsync(
      "pin",
      pinValue //, {
      //   keychainAccessible: ["WHEN_UNLOCKED"] //TODO: This might not be the right was to write this
      // })
    )
    .then(() => {
      console.log("Pin storage successfull");
    })
    .catch(error => {
      console.log(`Pin storage Failed (${error})`);
    });
};
