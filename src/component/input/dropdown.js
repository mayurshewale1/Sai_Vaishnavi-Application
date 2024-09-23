import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DropDown = ({ labelstyle, data, label, setItem, defaultText, btnStyle }) => {
    return (
        <View>
            <Text style={labelstyle ? labelstyle : styles.label}>{label}</Text>
            <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                    setItem(selectedItem)
                    // console.log(selectedItem.title, index);
                }}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={btnStyle ? btnStyle : styles.dropdownButtonStyle}>
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem.title) || defaultText}
                            </Text>
                            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            />
        </View>
    )
}
export default DropDown;