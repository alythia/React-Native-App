const handleBiometrics = async navigate => {
  try {
    const isHardwareSupported = await Expo.Fingerprint.hasHardwareAsync();
    console.log('hardware supported', isHardwareSupported);
    if (!isHardwareSupported) {
      const fingerpringExists = await Expo.Fingerprint.isEnrolledAsync();
      console.log('fingerprint exist?', fingerpringExists);
      if (fingerpringExists === true) {
        const fingerPrint = await Expo.Fingerprint.authenticateAsync();
        if (fingerPrint.success) {
          navigate('Scanner');
        } else if (fingerPrint.error === 'user_fallback') {
          navigate('UserLogin');
        }
      }else{
        console.log('navigating to UserLogin')
        navigate('UserLogin') //change this to UselLogin
      }
    }else{
      console.log('TouchID or FaceID is not supported')
      navigate('UserLogin');
    }

  } catch (e) {
    console.log('error is: ', e);
  }
};

export default handleBiometrics;
