import React, { useState } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Updated import
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constant/colors';
import DropDown from '../input/dropdown';


const reportsData = [
    { id: 'RPT001', type: 'Worker Attendance', date: '07/01/2024', generatedby: 'John Doe', description: 'Monthly reports for 2024', isSelected: false },
    { id: 'RPT002', type: 'Indents', date: '07/01/2024', generatedby: 'John Doe', description: 'Material issue report for 2024', isSelected: false },
    { id: 'RPT003', type: 'GRN', date: '07/01/2024', generatedby: 'John Doe', description: 'Sales report for 2024', isSelected: false },
    { id: 'RPT004', type: 'Material Issue', date: '07/01/2024', generatedby: 'John Doe', description: 'Monthly reports for 2024', isSelected: false },
    { id: 'RPT005', type: 'Inventory', date: '07/01/2024', generatedby: 'John Doe', description: 'Sales report for 2024', isSelected: false },
    { id: 'RPT006', type: 'Sales', date: '07/01/2024', generatedby: 'John Doe', description: 'Monthly reports for 2024', isSelected: false },
    { id: 'RPT007', type: 'Worker Attendance', date: '07/01/2024', generatedby: 'John Doe', description: 'Material issue report for 2024', isSelected: false },
    { id: 'RPT008', type: 'Indents', date: '07/01/2024', generatedby: 'John Doe', description: 'Monthly reports for 2024', isSelected: false },
    { id: 'RPT009', type: 'GRN', date: '07/01/2024', generatedby: 'John Doe', description: 'Material issue report for 2024', isSelected: false },
    { id: 'RPT010', type: 'Material Issue', date: '07/01/2024', generatedby: 'John Doe', description: 'Monthly reports for 2024', isSelected: false },
    // Add more data as needed
];

const unitsData = [
    { title: 'cm' },
    { title: 'm' },
    { title: 'km' },
];

const Reportlist = ({ navigation }) => {
    const [data, setData] = useState(reportsData);
    const [selectAll, setSelectAll] = useState(false);

    const toggleCheckbox = (index) => {
        const updatedData = [...data];
        updatedData[index].isSelected = !updatedData[index].isSelected;
        setData(updatedData);

        // Update selectAll checkbox based on the current selection state
        const allSelected = updatedData.every(item => item.isSelected);
        setSelectAll(allSelected);
    };

    const toggleSelectAll = () => {
        const updatedSelectAll = !selectAll;
        setSelectAll(updatedSelectAll);
        const updatedData = data.map(item => ({
            ...item,
            isSelected: updatedSelectAll,
        }));
        setData(updatedData);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.tableRow}>
            <CheckBox
                value={item.isSelected}
                onValueChange={() => toggleCheckbox(index)}
                style={styles.checkbox}
            />
            <Text style={[styles.tableCell, styles.paymentId]}>{item.id}</Text>
            <Text style={[styles.tableCell, styles.category]}>{item.type}</Text>
            <Text style={[styles.tableCell, styles.date]}>{item.date}</Text>
            <Text style={[styles.tableCell, styles.generatedBy]}>{item.generatedby}</Text>
            <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
                <Text style={[styles.tableCell, { width: 180 }]}>{item.description}</Text>
                <TouchableOpacity style={styles.copyIcon}>
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        color={colors.black}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', marginTop: 35 }}>
                    <Text style={{ fontSize: 14, fontWeight: '700', color: colors.black }}>Reports</Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{ width: '33%' }}>
                        <DropDown
                            data={unitsData}
                            setItem={(value) => {
                                // setUnit(value);
                                // clearError('unit');
                            }}
                            defaultText={'Report Type'}
                        />
                    </View>
                    <View style={{ width: '33%' }}>
                        <DropDown
                            data={unitsData}
                            setItem={(value) => {
                                // setUnit(value);
                                // clearError('unit');
                            }}
                            defaultText={'Supervisior'}
                        />
                    </View>
                    <View style={{ width: '33%' }}>
                        <DropDown
                            data={unitsData}
                            setItem={(value) => {
                                // setUnit(value);
                                // clearError('unit');
                            }}
                            defaultText={'Date'}
                        />
                    </View>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View style={{ flex: 1 }}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <CheckBox
                            value={selectAll}
                            onValueChange={toggleSelectAll}
                            style={styles.checkbox}
                        />
                        <Text style={[styles.tableHeaderText, styles.paymentId]}>Report ID</Text>
                        <Text style={[styles.tableHeaderText, styles.category]}>Report Type</Text>
                        <Text style={[styles.tableHeaderText, styles.date]}>Report Date</Text>
                        <Text style={[styles.tableHeaderText, styles.generatedBy]}>Generated By</Text>
                        <Text style={[styles.tableHeaderText, styles.description]}>Description</Text>
                    </View>

                    {/* Table Rows */}
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Reportlist;
