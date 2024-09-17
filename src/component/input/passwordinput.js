import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import colors from '../constant/colors';

const PasswordInput = ({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  value,
  secureTextEntry,
  onPress,
  error,
  optional
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}{optional == true ? null : <Text style={styles.asterisk}>*</Text>}</Text>
      <View style={error ? styles.passwordContainererr : styles.passwordContainer}>
        <TextInput
          autoCapitalize='none'
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          style={styles.passwordinput}
          value={value}
          placeholderTextColor={colors.placehodler}
        />

        <TouchableOpacity onPress={onPress} style={styles.iconbox}>
          {secureTextEntry ? (
            <Ionicons
              name="eye-off-outline"
              color={colors.black}
              size={20}
            />
          ) : (
            <Ionicons name="eye-outline" color={colors.black} size={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
