const handleBiometrics = async navigate => {
  try {
    const isHardwareSupported = await Expo.Fingerprint.hasHardwareAsync();
<<<<<<< HEAD
    console.log('hardware supported', isHardwareSupported);
    if (!isHardwareSupported) {
=======
    if (isHardwareSupported) {
>>>>>>> b6d3157e55a4e42b523faa3c0fdd58b0ef365459
      const fingerpringExists = await Expo.Fingerprint.isEnrolledAsync();
      if (fingerpringExists === true) {
        const fingerPrint = await Expo.Fingerprint.authenticateAsync();
        if (fingerPrint.success) {
          navigate("Scanner");
        } else if (fingerPrint.error === "user_fallback") {
          navigate("UserLogin");
        }
      } else {
        navigate("UserLogin"); //change this to UselLogin
      }
    } else {
      console.log("TouchID or FaceID is not supported");
      navigate("UserLogin");
    }
  } catch (e) {
    console.log("error is: ", e);
  }
};

export default handleBiometrics;
