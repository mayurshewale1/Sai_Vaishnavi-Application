import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './colors';
// import Calender from '../../assets/svg/calender.svg';

const DobInput = props => {
    const [show, setShow] = useState(false);

    // Function to handle date selection
    const handleDateSelect = date => {
        props.mydob(moment(date).format('DD-MM-YYYY'));
        setShow(false);

    };


    return (
        <View>
            <DatePicker
                modal
                mode="date"
                open={show}
                // minimumDate={moment().subtract(100, 'years')._d}
                // maximumDate={moment().subtract(18, 'years')._d}
                date={new Date()}
                onConfirm={handleDateSelect}
                onCancel={() => setShow(false)}
            />

            {/* <Text style={styles.label}>{props.label}</Text> */}
            {/* <TouchableOpacity
                onPress={() => setShow(!show)}
                activeOpacity={1}
                style={props.error ? styles.dobContainererr : styles.dobContainer}>
                <TextInput
                    pointerEvents="none"
                    editable={false}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    onChangeText={props.onChangeText}
                    style={styles.emailinput}
                    value={props?.value} // Show selected date in TextInput
                    placeholderTextColor={colors.placeholder}
                />
                <TouchableOpacity
                    onPress={() =>
                        setShow(!show)
                    }
                    style={styles.iconbox}>
                    <Ionicons
                    name="calendar-clear-sharp"
                    color={colors.dateText}
                    size={13}
                  />
                </TouchableOpacity>
            </TouchableOpacity> */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() =>
                        setShow(!show)
                    }
                    style={styles.dobiconbox}>
                    <Ionicons
                        name="calendar-clear-outline"
                        color={colors.white}
                        size={13}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.doblabel}>{props.label}</Text>
                    {
                        props?.value ?
                            <Text style={styles.doblabel}>{props.value}{
                                props?.time == false ? null :
                                    props.value?.length > 0 ? `/ ${moment(props.value, 'DD-MM-YYYY').format('HH:mm')}` : null}</Text>
                            :
                            <Text style={styles.doblabel}>{props.value}---</Text >
                    }
                </View>
            </View>

        </View>
    );
};

export default DobInput;