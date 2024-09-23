import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import Textinput from '../input/textinput';
import PasswordInput from '../input/passwordinput';
import PrimaryButton from '../button/primarybutton';
import colors from '../constant/colors';
import RememberMeToggle from '../button/radiobutton';

const Login = ({ navigation }) => {

    const [registrationCredentials, setRegistrationCredentials] = useState({
        firstName: "",
        lastName: "",
        phonenumber: "",
        password: "",
        cpassword: "",
        passwordhideshow1: true,
        passwordhideshow2: true,
    });
    const [errors, setErrors] = useState({});
    const emailRegx = /^\s*\w+([\s\.-]?\w+)*@\w+([\s\.-]?\w+)*(\.\w{2,3})+\s*$/;

    const isValid = () => {
        let errors = {};
        let isValid = true;

        if (!registrationCredentials.firstName.trim()) {
            errors.firstName = "First name is required *";
            isValid = false;
        }
        if (!registrationCredentials.lastName.trim()) {
            errors.lastName = "Last name is required *";
            isValid = false;
        }
        if (!registrationCredentials.phonenumber.trim()) {
            errors.phonenumber = "Email is required *";
            isValid = false;
        } else if (!emailRegx.test(registrationCredentials.phonenumber.trim())) {
            errors.phonenumber = "Invalid email *";
            isValid = false;
        }
        if (!registrationCredentials.password.trim()) {
            errors.password = "Password is required *";
            isValid = false;
        } else if (registrationCredentials.password.length < 6) {
            errors.password = "Password must be at least 6 characters *";
            isValid = false;
        }
        if (!registrationCredentials.cpassword.trim()) {
            errors.cpassword = "Confirm password is required *";
            isValid = false;
        } else if (registrationCredentials.cpassword !== registrationCredentials.password) {
            errors.cpassword = "Passwords do not match *";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleOnChange = (name, value) => {
        setRegistrationCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const onSubmit = () => {
        // if (isValid()) {
        navigation.navigate("Auth",{
            screen:"Home"
        });
        // } else {
        //     // Alert.alert("Validation Error", "Please correct the highlighted errors.");
        // }
    };


    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: colors.white
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 2 : 0}
        >
            <Image
                style={{width:'100%'}}
                source={require('../assets/images/bluebg.jpg')}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                style={{ marginTop: -50 }}
            >

                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Login</Text>
                    </View>

                    <Textinput
                        label={"Phone Number"}
                        placeholder={"Enter your Phone Number"}
                        onChangeText={(e) => handleOnChange("phonenumber", e)}
                        value={registrationCredentials.phonenumber}
                        error={!!errors.phonenumber}
                    />
                    {errors.phonenumber && <Text style={styles.errText}>{errors.phonenumber}</Text>}

                    <PasswordInput
                        label={"Password"}
                        placeholder={"Sample@123"}
                        onChangeText={(e) => handleOnChange("password", e)}
                        onPress={() => setRegistrationCredentials({ ...registrationCredentials, passwordhideshow1: !registrationCredentials.passwordhideshow1 })}
                        secureTextEntry={registrationCredentials.passwordhideshow1}
                        value={registrationCredentials.password}
                        error={!!errors.password}
                    />
                    {errors.password && <Text style={styles.errText}>{errors.password}</Text>}

                    <View style={styles.rememberMeContainer}>
                        <Text style={styles.termsText}>Forgot Password?</Text>
                    </View>

                    <View>
                        <RememberMeToggle/>
                    </View>

                    <View style={{ height: 50 }}></View>
                </View>
                <View>
                    <PrimaryButton
                        title={"Login"}
                        onPress={onSubmit}
                    />
                    <View style={styles.forgotpasswordContainer}>
                        <Text style={styles.noteText}>
                            Don't have an account? <Text style={styles.termsText}>Sign up</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;