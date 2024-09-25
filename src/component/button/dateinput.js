import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme, } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import colors from '../constant/colors';
import { styles } from './styles';


const DateAndTimeInput = props => {
  const [show, setShow] = useState(false);

  const [displayValue, setDisplayValue] = useState(props.value ? props.value : '');
 
  return (
    <View>
      <DatePicker  
        modal
        mode="date"
        open={show}
        minimumDate={moment().subtract(100, 'years')._d}
        maximumDate={moment().subtract(18, 'years')._d}
        date={moment().subtract(18, 'years')._d}
        onConfirm={date => {
          setShow(false);
          props.mydob(moment(date).format('DD/MM/YYYY'), "dob", props.dateinputindex);
          setDisplayValue(moment(date).format('DD/MM/YYYY'), "dob", props.dateinputindex);
        }}
        onCancel={() => {
          setShow(false);
        }}
      />

      <Text style={styles.label}>{props.label}
      {props.optional==true ?null :<Text style={styles.asterisk}>*</Text>} </Text>
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}
        disabled={props?.editable ? props?.editable : false}
        activeOpacity={1}
        style={props.error ? styles.dobContainererr : styles.dobContainer}>
        <TextInput
          pointerEvents="none"
          editable={false} 
          placeholder={"Select Date"}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          style={[styles.passwordinput]}
          value={props.value ? props.value : ''}
          placeholderTextColor={colors.placehodler}
        />
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}
          style={styles.iconbox}
          disabled={props?.editable ? props?.editable : false}
          >
          <Ionicons
            name="calendar-outline"
            color={colors.textcolor}
            size={20}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default DateAndTimeInput;