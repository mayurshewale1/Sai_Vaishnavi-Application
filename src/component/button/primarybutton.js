import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constant/colors';
import { styles } from './styles';


const PrimaryButton = ({ onPress, title, loading, btnStyle, textStyle, disabled = false, icon, iconscreen }) => {
    const containerStyle = [
        btnStyle ? btnStyle : styles.primarycontainer,

        disabled ? styles.disabled : null,
    ];
    const handlePress = disabled ? null : onPress;
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={containerStyle}
            disabled={disabled}>
            {
                icon ?
                    <Ionicons
                        name="add"
                        color={colors.white}
                        size={20}
                    />
                    : null
            }
            <Text style={textStyle ? textStyle : styles.primarytxt}>{title}</Text>
            {loading ?
                <View style={styles.left}>
                    <ActivityIndicator size={"small"} color={"white"} />
                </View> : null}
        </TouchableOpacity>
    );
};

export default PrimaryButton;