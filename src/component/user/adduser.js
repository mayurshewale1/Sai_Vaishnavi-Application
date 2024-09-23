import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import Textinput from '../input/textinput';
import PasswordInput from '../input/passwordinput';
import PrimaryButton from '../button/primarybutton';
import colors from '../constant/colors';
import { styles } from './styles';
import DropDown from '../input/dropdown';
import MainHeader from '../drawer/mainheader';
import { useTab } from '../context/tabcontext';

const AddUser = ({ navigation }) => {

    const { activeTab } = useTab();
    const [registrationCredentials, setRegistrationCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phonenumber: "",
        password: "",
        cpassword: "",
        username: "",
        role: "",
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
        if (!registrationCredentials.email.trim()) {
            errors.email = "Email is required *";
            isValid = false;
        } else if (!emailRegx.test(registrationCredentials.email.trim())) {
            errors.email = "Invalid email *";
            isValid = false;
        }
        if (!registrationCredentials.role.trim()) {
            errors.role = "Role is required *";
            isValid = false;
        }
        if (!registrationCredentials.phonenumber.trim()) {
            errors.phonenumber = "Phone number is required *";
            isValid = false;
        }
        if (!registrationCredentials.username.trim()) {
            errors.username = "Username is required *";
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
        if (isValid()) {
            navigation.navigate("Login");
            // navigation.pop()
        } else {
            // Alert.alert("Validation Error", "Please correct the highlighted errors.");
        }
    };

    const rolesData = [
        { title: 'Admin' },
        { title: 'Supervisor 1' },
        { title: 'Supervisor 2' },
    ];

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
                        <Text style={styles.header}>New User</Text>
                    </View>

                    <Textinput
                        label={"First Name"}
                        placeholder={"John"}
                        onChangeText={(e) => handleOnChange("firstName", e)}
                        value={registrationCredentials.firstName}
                        error={!!errors.firstName}
                    />
                    {errors.firstName && <Text style={styles.errText}>{errors.firstName}</Text>}

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
                        placeholder={"Enter your Phone Number"}
                        onChangeText={(e) => handleOnChange("phonenumber", e)}
                        value={registrationCredentials.phonenumber}
                        error={!!errors.phonenumber}
                    />
                    {errors.phonenumber && <Text style={styles.errText}>{errors.phonenumber}</Text>}

                    <DropDown
                        label={"Role"}
                        data={rolesData}
                        defaultText="Roles"
                        setItem={(selectedRole) => handleOnChange("role", selectedRole.title)}
                        labelstyle={styles.label}
                        btnStyle={styles.dropdownButtonStyle}
                    />
                    {errors.role && <Text style={styles.errText}>{errors.role}</Text>}

                    <Textinput
                        label={"Username"}
                        placeholder={"username"}
                        onChangeText={(e) => handleOnChange("username", e)}
                        value={registrationCredentials.username}
                        error={!!errors.username}
                    />
                    {errors.username && <Text style={styles.errText}>{errors.username}</Text>}

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

                    <PasswordInput
                        label={"Confirm Password"}
                        placeholder={"Sample@123"}
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
                    <View>
                        <PrimaryButton
                            title={"Cancel"}
                            onPress={() => {
                                navigation.pop()
                            }}
                            btnStyle={styles.primarycontainer}
                            textStyle={styles.primarytxt}
                        />
                    </View>
                    <View>
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

export default AddUser;