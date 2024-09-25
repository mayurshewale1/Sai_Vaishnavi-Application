import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Textinput from '../input/textinput';
import PasswordInput from '../input/passwordinput';
import PrimaryButton from '../button/primarybutton';
import colors from '../constant/colors';
import MainHeader from '../drawer/mainheader';
import { useTab } from '../context/tabcontext';
import { styles } from './styles';
import DateAndTimeInput from '../button/dateinput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Profile = ({ navigation }) => {
    const { activeTab } = useTab();
    const [registrationCredentials, setRegistrationCredentials] = useState({
        fullName: "",
        dob: "",
        email: "",
        phonenumber: "",
        city: "",
        state: "",
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

        if (!registrationCredentials.fullName.trim()) {
            errors.fullName = "Full name is required *";
            isValid = false;
        }
        if (!registrationCredentials.dob.trim()) {
            errors.dob = "Date of birth is required *";
            isValid = false;
        }
        if (!registrationCredentials.email.trim()) {
            errors.email = "Email is required *";
            isValid = false;
        } else if (!emailRegx.test(registrationCredentials.email.trim())) {
            errors.email = "Invalid email *";
            isValid = false;
        }
        if (!registrationCredentials.phonenumber.trim()) {
            errors.phonenumber = "Phone number is required *";
            isValid = false;
        }
        if (!registrationCredentials.city.trim()) {
            errors.city = "City is required *";
            isValid = false;
        }
        if (!registrationCredentials.state.trim()) {
            errors.state = "State is required *";
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

    const getDob = (dob) => {
        handleOnChange('dob', dob);
    };


    const onSubmit = () => {
        if (isValid()) {
            navigation.navigate("Login");
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: colors.white }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 2 : 0}
        >
            <MainHeader navigation={navigation} tab={activeTab} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Profile</Text>
                    </View>

                    <View style={styles.ProfileImgContainer}>
                        <Image source={require('../assets/images/userimage.png')}
                            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                        />
                        <TouchableOpacity style={styles.editContainer}>
                            <MaterialCommunityIcons
                                name="lead-pencil"
                                color={colors.white}
                                size={15}
                            />
                        </TouchableOpacity>
                    </View>

                    <Textinput
                        label={"Full Name"}
                        placeholder={"Full Name"}
                        onChangeText={(e) => handleOnChange("fullName", e)}
                        value={registrationCredentials.fullName}
                        error={!!errors.fullName}
                    />
                    {errors.fullName && <Text style={styles.errText}>{errors.fullName}</Text>}

                    <DateAndTimeInput
                        label={"Date of Birth"}
                        mydob={getDob}
                        value={registrationCredentials.dob} // Display the selected date
                    />
                    {errors.dob && <Text style={styles.errText}>{errors.dob}</Text>}

                    <Textinput
                        label={"Email Address"}
                        placeholder={"abc@gmail.com"}
                        onChangeText={(e) => handleOnChange("email", e)}
                        value={registrationCredentials.email}
                        error={!!errors.email}
                    />
                    {errors.email && <Text style={styles.errText}>{errors.email}</Text>}

                    <Textinput
                        label={"Phone Number"}
                        placeholder={"Phone Number"}
                        onChangeText={(e) => handleOnChange("phonenumber", e)}
                        value={registrationCredentials.phonenumber}
                        error={!!errors.phonenumber}
                    />
                    {errors.phonenumber && <Text style={styles.errText}>{errors.phonenumber}</Text>}

                    <Textinput
                        label={"City"}
                        placeholder={"City"}
                        onChangeText={(e) => handleOnChange("city", e)}
                        value={registrationCredentials.city}
                        error={!!errors.city}
                    />
                    {errors.city && <Text style={styles.errText}>{errors.city}</Text>}

                    <Textinput
                        label={"State"}
                        placeholder={"State"}
                        onChangeText={(e) => handleOnChange("state", e)}
                        value={registrationCredentials.state}
                        error={!!errors.state}
                    />
                    {errors.state && <Text style={styles.errText}>{errors.state}</Text>}

                    <PasswordInput
                        label={"Password"}
                        placeholder={"Password"}
                        onChangeText={(e) => handleOnChange("password", e)}
                        onPress={() => setRegistrationCredentials({ ...registrationCredentials, passwordhideshow1: !registrationCredentials.passwordhideshow1 })}
                        secureTextEntry={registrationCredentials.passwordhideshow1}
                        value={registrationCredentials.password}
                        error={!!errors.password}
                    />
                    {errors.password && <Text style={styles.errText}>{errors.password}</Text>}

                    <PasswordInput
                        label={"Confirm Password"}
                        placeholder={"Confirm Password"}
                        onChangeText={(e) => handleOnChange("cpassword", e)}
                        onPress={() => setRegistrationCredentials({ ...registrationCredentials, passwordhideshow2: !registrationCredentials.passwordhideshow2 })}
                        secureTextEntry={registrationCredentials.passwordhideshow2}
                        value={registrationCredentials.cpassword}
                        error={!!errors.cpassword}
                    />
                    {errors.cpassword && <Text style={styles.errText}>{errors.cpassword}</Text>}

                    <View style={{ height: 80 }}></View>
                </View>
                <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center', marginBottom: 30 }}>
                    <View style={{ width: '50%' }}>
                        <PrimaryButton
                            title={"Cancel"}
                            onPress={() => {
                                navigation.pop()
                            }}
                            btnStyle={styles.primarycontainer}
                            textStyle={styles.primarytxt}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <PrimaryButton
                            title={"Save"}
                            onPress={onSubmit}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Profile;