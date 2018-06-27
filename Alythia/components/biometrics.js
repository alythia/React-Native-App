export default (handleBiometrics = async navigate => {
  try {
    const res = await Expo.Fingerprint.isEnrolledAsync();
    if (res === true) {
      const fingerPrint = await Expo.Fingerprint.authenticateAsync();
      if (fingerPrint.success) {
        navigate("Scanner");
      } else if (fingerPrint.error === "user_fallback") {
        // this is where we need to ask user for PIN or Password
        navigate("Login");
      }
    }
  } catch (e) {
    console.log("error is: ", e);
  }
});
