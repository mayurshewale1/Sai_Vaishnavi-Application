import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import Textinput from '../input/textinput';
import PrimaryButton from '../button/primarybutton';
import colors from '../constant/colors';
import { styles } from './styles';
import DropDown from '../input/dropdown';
import MainHeader from '../drawer/mainheader';
import { useTab } from '../context/tabcontext';
import DateAndTimeInput from '../button/dateinput';

const NewPayment = ({ navigation }) => {

    const { activeTab } = useTab();
    const [registrationCredentials, setRegistrationCredentials] = useState({
        projectname: "",
        paidby: "",
        amount: "",
        mode: "",
        tag: "",
        vendor: "",
        remark: "",
        date: "" // Added date for date picker
    });

    const [errors, setErrors] = useState({});

    const isValid = () => {
        let errors = {};
        let isValid = true;

        if (!registrationCredentials.projectname.trim()) {
            errors.projectname = "Project name is required *";
            isValid = false;
        }

        if (!registrationCredentials.paidby.trim()) {
            errors.paidby = "Paid by is required *";
            isValid = false;
        }

        if (!registrationCredentials.amount.trim()) {
            errors.amount = "Amount is required *";
            isValid = false;
        } else if (isNaN(registrationCredentials.amount) || Number(registrationCredentials.amount) <= 0) {
            errors.amount = "Enter a valid amount *";
            isValid = false;
        }

        if (!registrationCredentials.mode.trim()) {
            errors.mode = "Mode of payment is required *";
            isValid = false;
        }

        if (!registrationCredentials.tag.trim()) {
            errors.tag = "Tag is required *";
            isValid = false;
        }

        if (!registrationCredentials.date.trim()) {
            errors.date = "Payment due date is required *";
            isValid = false;
        }

        if (!registrationCredentials.vendor.trim()) {
            errors.vendor = "Vendor is required *";
            isValid = false;
        }

        if (!registrationCredentials.remark.trim()) {
            errors.remark = "Remark is required *";
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
            // navigation.navigate("Login");
            navigation.pop();
        }
    };

    const getDob = (dob) => {
        handleOnChange('date', dob);
    };

    const rolesData = [
        { title: 'Admin' },
        { title: 'Supervisor 1' },
        { title: 'Supervisor 2' },
    ];

    const modeData = [
        { title: 'UPI' },
        { title: 'PhonePay' },
        { title: 'Bank Transfer' },
    ];

    const tagData = [
        { title: 'Tag 1' },
        { title: 'Tag 2' },
        { title: 'Tag 3' },
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
                        <Text style={styles.header}>New Project</Text>
                    </View>

                    <Textinput
                        label={"Project Name"}
                        placeholder={"Enter project name"}
                        onChangeText={(e) => handleOnChange("projectname", e)}
                        value={registrationCredentials.projectname}
                        error={!!errors.projectname}
                    />
                    {errors.projectname && <Text style={styles.errText}>{errors.projectname}</Text>}

                    <DropDown
                        label={"Paid By"}
                        data={rolesData}
                        defaultText="Paid By"
                        setItem={(selectedRole) => handleOnChange("paidby", selectedRole.title)}
                        labelstyle={styles.label}
                        btnStyle={styles.dropdownButtonStyle}
                    />
                    {errors.paidby && <Text style={styles.errText}>{errors.paidby}</Text>}

                    <Textinput
                        label={"Paid Amount"}
                        placeholder={"Enter paid amount"}
                        onChangeText={(e) => handleOnChange("amount", e)}
                        value={registrationCredentials.amount}
                        error={!!errors.amount}
                    />
                    {errors.amount && <Text style={styles.errText}>{errors.amount}</Text>}

                    <DropDown
                        label={"Mode of Payment"}
                        data={modeData}
                        defaultText="Mode of Payment"
                        setItem={(selectedRole) => handleOnChange("mode", selectedRole.title)}
                        labelstyle={styles.label}
                        btnStyle={styles.dropdownButtonStyle}
                    />
                    {errors.mode && <Text style={styles.errText}>{errors.mode}</Text>}

                    <DropDown
                        label={"Tag"}
                        data={tagData}
                        defaultText="Tags"
                        setItem={(selectedRole) => handleOnChange("tag", selectedRole.title)}
                        labelstyle={styles.label}
                        btnStyle={styles.dropdownButtonStyle}
                    />
                    {errors.tag && <Text style={styles.errText}>{errors.tag}</Text>}

                    <DateAndTimeInput
                        label={"Payment Due Date"}
                        mydob={getDob}
                        value={registrationCredentials.date} // Display the selected date
                    />
                    {errors.date && <Text style={styles.errText}>{errors.date}</Text>}

                    <Textinput
                        label={"Vendor"}
                        placeholder={"Enter vendor"}
                        onChangeText={(e) => handleOnChange("vendor", e)}
                        value={registrationCredentials.vendor}
                        error={!!errors.vendor}
                    />
                    {errors.vendor && <Text style={styles.errText}>{errors.vendor}</Text>}

                    <Textinput
                        label={"Remark"}
                        placeholder={"Enter remark"}
                        onChangeText={(e) => handleOnChange("remark", e)}
                        value={registrationCredentials.remark}
                        error={!!errors.remark}
                    />
                    {errors.remark && <Text style={styles.errText}>{errors.remark}</Text>}

                    <View style={{ height: 80 }}></View>
                </View>
                <View style={{ width: '95%', alignSelf: 'center', marginBottom: 30 }}>

                    <PrimaryButton
                        title={"Add New Payment"}
                        onPress={onSubmit}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default NewPayment;
