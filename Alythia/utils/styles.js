import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  email: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    color: '#ecf0f1',
    fontSize: 20,
    height: 50,
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 100
  },
  buttonArea: {
    flex: 2,
    alignItems: 'center'
  },
  pin: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pinInput: {
    color: '#ecf0f1',
    fontSize: 20,
    height: 55,
    width: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    margin: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5
  },
  backButton: {
    justifyContent: 'flex-start'
  }
})