import { Dimensions, StyleSheet } from 'react-native';
import colors from '../constant/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    HeadingContainer: {
        width: '95%',
        alignSelf: 'center',
        padding: 10
    },
    HeadingContainerText: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.black
    },
    cardContainer: {
        width: '95%',
        alignSelf: 'center',
        borderWidth: 1.6,
        borderRadius: 10,
        padding: 10,
        borderColor: colors.bottomTabBackgroundcolor,
        marginTop: 10
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    flexSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '41%',
        alignItems: 'center',
    },
    flexSubContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 11,
        color: colors.dateText
    },
    supervisorText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black
    },
    priorityText: {
        backgroundColor: colors.red,
        padding: 5,
        fontSize: 12,
        borderRadius: 10,
        color: colors.black
    },
    LowpriorityText: {
        backgroundColor: colors.lowpriority,
        padding: 5,
        fontSize: 12,
        borderRadius: 10,
        color: colors.black
    },
    MediumpriorityText: {
        backgroundColor: colors.red,
        padding: 5,
        fontSize: 12,
        borderRadius: 10,
        color: colors.black
    },
    activeText: {
        backgroundColor: colors.active,
        padding: 6,
        borderRadius: 10,
        fontSize: 12,
        color: colors.black
    },
    siteContainer: {
        marginTop: 10
    },
    siteContainerText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black,
        marginLeft: 2
    },
    percentContainer: {
        backgroundColor: colors.lightgray,
        width: '87%',
        height: 5,
        margin: 5,
        alignSelf: 'center'
    },
    compeletePercentContainer: {
        backgroundColor: colors.primary,
        height: 5,
    },
    percentText: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.percentText
    },
    bottomButton: {
        bottom: 90,
        width: '30%',
        alignSelf: 'flex-end',
        marginBottom: 10,
        alignItems: 'center',
        padding: 10,
        position: 'absolute'
    },
    addPrimarycontainer: {
        backgroundColor: colors.primary,
        width: '50%',
        flexDirection: "row",
        alignSelf: 'center',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullmodal: {
        backgroundColor: 'transparent',
        margin: 0, // This is the important style you need to set
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modal: {
        // height: '50%',
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
    },
    modalGraycontainer: {
        height: 4,
        width: 40,
        alignSelf: 'center',
        backgroundColor: colors.borderStroke,
    },
    modalHeaderContainer: {
        alignSelf: 'center',
        marginTop:20
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.black
    },
    modalInput: {
        width: '100%',
        alignSelf: 'center',
        height: 40,
        padding: 10,
        fontSize: 14,
        paddingTop: 0,
        borderRadius: 10,
        borderWidth: 1.5,
        paddingBottom: 0,
        fontFamily: 'Poppins-Regular',
        backgroundColor: colors.inputBg,
        color: colors.darkBlueTextColor,
        borderColor: colors.borderStroke,
    },
    modalSubHeading: {
        marginTop:10,
        fontSize: 14,
        padding:5,
        color: colors.black,
        fontWeight: '600'
    },
    taskType: {
        padding: 5,
        width: '100%',
        alignSelf: 'center',
    },
    addPrimarycontainer2: {
        backgroundColor: colors.primary,
        // backgroundColor: '#3F5C88',
        width: '90%',
        flexDirection: "row",
        alignSelf: 'center',
        height: 45,
        borderRadius: 30,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
    alertMessageContainer : {
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:10,
        elevation:20,
        borderBottomWidth:2,
        borderBottomColor:colors.bottomBordergreenColor,
        backgroundColor:colors.white,
    },
    alertMessageText1:{
        fontSize:17,
        color:colors.black,
        fontWeight:'700'
    },
    alertMessageText2:{
        fontSize:12,
        color:colors.black,
        fontWeight:'400'
    },
    errText: {
        fontFamily: 'Lato',
        fontSize: 12,
        fontWeight: '400',
        color: 'red',
        marginTop: 5,
        padding: 5,
        width: '100%',
        alignSelf: 'center'
    },


    mapFlexContainter: {
        margin: 5
    },
    mapFlexContainter2: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightgray,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10
    },
    mapFlexContainter3: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightgray,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10
    },
    mapFlexContainter4: {
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightgray,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        margin: 10
    },
    mapFlexContainterText2: {
        fontSize: 12,
        color: colors.black,
        margin: 5,
        textAlign: 'center',
        width: '60%'
    },
    mapFlexContainterText3: {
        fontSize: 12,
        color: colors.black,
        margin: 5,
        textAlign: 'center',
        width: '50%'
    },

    NoSearchfoundText: {
      fontSize:14,
      color:colors.black,
      fontWeight:'500',
    },
    headingText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black,
        width:'90%',
        alignSelf:'center'        
    },
    taskTypeText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.black,
        width:'90%',
        marginTop:10,
        alignSelf:'center'        
    },
    assignedUserText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.black,
        width:'90%',
        marginBottom:10,
        alignSelf:'center'        
    },
    taskTypeFlexContainer: {
        width: '70%',
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    primarycontainer: {
        backgroundColor: colors.primary,
        width: '100%',
        flexDirection: "row",
        alignSelf: 'center',
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export { styles }