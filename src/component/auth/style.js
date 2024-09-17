import { StyleSheet } from 'react-native';
import colors from '../constant/colors';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '85%',
        backgroundColor: colors.white,
        alignSelf: 'center',
        borderWidth: 0.3,
        borderColor: colors.black,
        borderRadius:10
    },
    headerContainer: {
        alignSelf: 'center',
        width: '100%',
        padding: 20
    },
    header: {
        fontSize: 30,
        color: colors.black,
        textAlign: 'center',
        fontWeight: '700',
    },
    bottomButton: {
        bottom: 0,
        // marginBottom: 10,
        width: '100%',
        position: 'absolute'
    },
    errText: {
        fontFamily: 'Lato',
        fontSize: 12,
        fontWeight: '400',
        color: 'red',
        marginTop: 3,
        paddingLeft: 5,
        width: '90%',
        alignSelf: 'center'
    },
    forgotpasswordContainer: {
        width: '100%',
        padding: 20
    },
    noteText: {
        textAlign: 'center',
        color: colors.black,
        fontSize: 14
    },
    termsText: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '700'
    },
    rememberMeContainer:{
        width:'90%',
        alignSelf:'center',
        alignItems:'flex-end',
        marginTop:10
    }
})

export { styles };