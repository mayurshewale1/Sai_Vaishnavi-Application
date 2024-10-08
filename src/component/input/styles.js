import { StyleSheet } from 'react-native';
import colors from '../constant/colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    width: '90%',
    textAlign: 'left',
    // left: 5,
    marginTop: 15,
    alignSelf: 'center',
  },
  multiLineLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    width: '97%',
    textAlign: 'left',
    // left: 5,
    paddingVertical: 10,
    marginTop: 15,
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    padding: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: colors.white,
    color: colors.black,
    borderColor: colors,
    borderRadius: 10,
    borderWidth: 0.3,
    marginTop: 5,
    paddingBottom: 0,
    paddingTop: 0,
  },
  inputerr: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    padding: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 10,
    borderColor: colors.rejected,
    borderWidth: 0.5,
    marginTop: 5,
  },
  emailContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 5,
    borderColor: colors.borderStroke,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailContainererr: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 5,
    borderColor: colors.rejected,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailinput: {
    width: '85%',
    height: 40,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
    backgroundColor: 'transparent',
    color: colors.black,
    paddingBottom: 0,
    paddingTop: 0,
  },
  emailiconbox: {
    width: '14%',
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    color: colors.black,
    paddingTop: 0,
    paddingBottom: 0,

  },

  countrybox: {
    width: '20%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.black,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 1
  },

  tabletcountrybox: {
    width: '10%',
    height: 40,
    alignItems: 'center',
    color: colors.black,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 1
  },

  country: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  modal: {
    flex: 1,
    height: '100%',
    width: '85%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 110
  },
  countryserach: {
    height: 45,
    borderRadius: 0,
    color: colors.black,
    fontFamily: "Poppins-Regular",
  },
  countrybtn: {
    height: 55,
  },
  countryName: {
    color: colors.black,
    fontFamily: "Poppins-Regular",
    fontSize: 16
  },
  dialCode: {
    color: colors.black,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  searchMessageText: {
    color: colors.black,
    fontFamily: "Poppins-Regular",
    fontSize: 16
  },
  countrymodal: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  moobileinput: {
    width: '80%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    borderRadius: 10,
    padding: 10,
    color: colors.black,
    paddingBottom: 0,
    paddingTop: 0,
  },
  countryinput: {
    width: '70%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'transparent',
    color: colors.black,
    paddingBottom: 0,
    paddingTop: 0,
  },
  countryboxForCountryPicker: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    color: colors.black,
  },
  inputmulti: {
    width: '100%',
    alignSelf: 'center',
    height: 150,
    padding: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: colors.inputBg,
    color: colors.black,
    borderRadius: 10,
    borderColor: colors.borderStroke,
    borderWidth: 1.5,
  },
  inputmultierr: {
    width: '90%',
    alignSelf: 'center',
    height: 150,
    padding: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: colors.white,
    borderColor: colors.rejected,
    color: colors.black,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 5,
  },

  tabletmoobileinput: {
    width: '90%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    borderRadius: 10,
    padding: 10,
    color: colors.black,
    paddingBottom: 0,
    paddingTop: 0,
  },


  tabletcountryboxForCountryPicker: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    color: colors.black,
  },
  tabletcountryinput: {
    width: '80%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'transparent',
    color: colors.black,
    paddingBottom: 0,
    paddingTop: 0,
  },
  tabletdownarrow: {
    width: '5%',
  },
  passwordContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.3,
    marginTop: 5,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordinput: {
    width: '85%',
    height: 40,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
    backgroundColor: 'transparent',
    color: colors.black,
    paddingBottom: 0,
    paddingTop: 0,
  },
  passwordContainererr: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.3,
    marginTop: 5,
    borderColor: colors.rejected,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchinput: {
    width: '85%',
    height: 40,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
    backgroundColor: colors.bottomTabBackgroundcolor,
    color: colors,
    paddingBottom: 0,
    paddingTop: 0,
  },
  searchinput2: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
    backgroundColor: colors.white,
    color: colors,
    paddingBottom: 0,
    paddingTop: 0,
  },
  searchinputerr: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.3,
    marginTop: 5,
    borderColor: colors.rejected,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconbox: {
    width: '14%',
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    color: colors,
    paddingTop: 0,
    paddingBottom: 0,
    // borderBottomWidth:0.4,
    // borderTopWidth:0.4,
  },
  primarycontainer: {
    backgroundColor: colors.primary,
    // backgroundColor: '#3F5C88',
    width: '90%',
    flexDirection: "row",
    alignSelf: 'center',
    height: 45,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primarytxt: {
    color: colors.buttontxt1,
    fontSize: 14,
    textAlign: "center",
    fontFamily: 'Poppins-Regular',
  },
  BackheaderContainer: {
    backgroundColor: colors.lightgray,
    width: 40,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 40
  },


  //Header Styles
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  HeaderContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  HeaderContainer2: {
    flexDirection: 'row',
    width: '80%',
    padding: 10,
    alignItems: 'center',
  },
  imgContaier: {
    width: '10%',
    height: 36,
    alignItems: 'center',
    borderRadius: 50,
  },
  userText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors
  },
  searchContainer: {
    width: '95%',
    alignSelf: 'center',
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.bottomTabBackgroundcolor,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer2: {
    width: '95%',
    alignSelf: 'center',
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.bottomTabBackgroundcolor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dobContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 5,
    color: colors.black,
    borderColor: colors.borderStroke,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dobContainererr: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 5,
    color: colors.black,
    borderColor: colors.rejected,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dobiconbox: {
    width: '20%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.black,
    paddingTop: 0,
    paddingBottom: 0,
    // borderBottomWidth:0.4,
    // borderTopWidth:0.4,
  },
  doblabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    width: '100%',
    left: 5,
    alignSelf: 'center',
  },

  uploadDocumentMainContainer: {
    width: '30%',
    padding: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  uploadDocumentText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
    marginLeft: 5
  },
  uploadDocumentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BackheaderFlexContainer: {
    paddingBottom: 10, paddingTop: 10, width: '100%', flexDirection: 'row', alignItems: 'center'
  },
  BackheaderFlexContainer2: {
    paddingBottom: 10, paddingTop: 10, width: '100%', flexDirection: 'row', alignItems: 'center',
    elevation: 2, borderTopWidth: 2,
    borderTopColor: '#efefef',
  },

  notificationFlexContainer: {
    flexDirection: 'row',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropdownButtonStyle: {
    width: '95%',
    height: 40,
    backgroundColor: colors.white,
    // borderWidth: 1.5,
    // borderColor: colors.borderStroke,
    alignSelf: 'center',
    // marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
    color: colors.black,
  },
  dropdownButtonArrowStyle: {
    fontSize: 18,
    color: colors.black
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },

  fullmodal: {
    backgroundColor: 'transparent',
    margin: 0, // This is the important style you need to set
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerModal: {
    // height: '50%',
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalButtonText: {
    fontSize: 16,
    color: colors,
    marginLeft: 10,
  },
  imgContaier2: {
    width: '14%',
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 45/2,
    borderWidth: 3,
    borderColor: colors.primary
  },

})

export { styles };