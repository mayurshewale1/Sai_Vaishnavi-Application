import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

const Textinput = ({ label, placeholder, keyboardType, onChangeText, value, error, max, editable, style, labelstyle, name, ref, multiline, numberOfLines }) => {

    return (
        <View>
            <Text style={labelstyle ? labelstyle : styles.label}>{label}</Text>
            <TextInput
                name={name}
                autoCapitalize="none"
                placeholder={placeholder}
                maxLength={max}
                editable={editable}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                style={[
                    style ? style : error ? styles.inputerr : styles.input,
                    multiline && { height: numberOfLines * 20, textAlignVertical: 'top', paddingTop: 10, color: colors }
                ]}
                value={value}
                multiline={multiline ? true : false}
                numberOfLines={numberOfLines ? numberOfLines : 1}
                placeholderTextColor={"gray"}
                ref={ref}
            />
        </View>
    )
}


export default Textinput
