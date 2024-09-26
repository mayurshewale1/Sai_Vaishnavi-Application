import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

const Textinput = ({ label, placeholder, keyboardType, onChangeText, value, error, max, editable, style, labelstyle, name, ref, multiline, numberOfLines }) => {

    console.log("error<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>", error);

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
                    styles.input,   // Check if error is true, apply the error style
                    multiline && { 
                      height: numberOfLines * 20,             // Adjust the height for multiline text input
                      textAlignVertical: 'top',               // Align text to the top
                      paddingTop: 10,                         // Add padding
                      color: colors.red                       // Use specific color from colors object (use red for error text)
                    }
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
