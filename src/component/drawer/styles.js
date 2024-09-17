import { StyleSheet } from 'react-native';
import colors from '../constant/colors';

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.primary
  },
  headerContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%'
  },
  profileContainer: {
    borderColor: colors.white,
    borderWidth: 2,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    width: '100%',
    padding: 0, // Ensure no padding
    margin: 0,  // Ensure no margin
  },
  crossBtnContaine: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  menuItemStyle: {
    padding: 10,
    flexDirection:'row',
  },
  activeMenuItemStyle: {
    padding: 10,
    width: '50%',
    borderRadius: 20,
    flexDirection:'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.white
  },
  menuItemTextStyle: {
    color: colors.white,
    left:15,
    fontSize: 16
  },
  activeMenuItemTextStyle: {
    color: colors.black,
    fontSize: 16,
    left:15,
  },
})


export { styles };