import React, { useState } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Updated import
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constant/colors';
import DropDown from '../input/dropdown';

const reportsData = [
    { id: '01', username: 'Ananya Sharma', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '02', username: 'Rahul Mehta', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '03', username: 'Vikram Singh', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '04', username: 'Neha Choudhary', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '05', username: 'Ananya Sharma', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '06', username: 'Vikram Singh', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '07', username: 'Amit Patel', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '08', username: 'Rahul Mehta', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
    { id: '09', username: 'Rahul Mehta', email: 'john.doe@example.com', phone: '9876543210', dateJoined: '01/01/2023', isSelected: false },
];

const unitsData = [
    { title: 'cm' },
    { title: 'm' },
    { title: 'km' },
];

const rolesData = [
    { title: 'Admin' },
    { title: 'supervisior 1' },
    { title: 'supervisior 2' },
];

const projectData = [
    { title: 'Project 1' },
    { title: 'Project 2' },
    { title: 'Project 3' },
];

const UserList = ({ navigation }) => {
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
            <View style={styles.usernameContainer}>
                <Image
                    source={require('../assets/images/userimage.png')}
                    width={'30'}
                    height={'30'}
                />
                <Text style={[styles.tableCell, styles.username]}>{item.username}</Text>
            </View>
            <DropDown
                data={rolesData}
                setItem={(value) => {
                    // setUnit(value);
                    // clearError('unit');
                }}
                defaultText={'Roles'}
                btnStyle={styles.dropdownButtonStyle}
            />
            <Text style={[styles.tableCell, styles.email]}>{item.email}</Text>
            <Text style={[styles.tableCell, styles.phone]}>{item.phone}</Text>
            <DropDown
                data={projectData}
                setItem={(value) => {
                    // setUnit(value);
                    // clearError('unit');
                }}
                defaultText={'View project'}
                btnStyle={styles.dropdownButtonStyle2}
            />
            <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between' }}>
                <Text style={[styles.tableCell, styles.dateJoined]}>{item.dateJoined}</Text>
                <TouchableOpacity style={styles.copyIcon}>
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        color={colors}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>Users</Text>
                <View style={styles.dropdownContainer}>
                    <View style={{ width: '33%', marginTop: -20 }}>
                        <DropDown data={projectData} defaultText="Projects" />
                    </View>
                    <View style={{ width: '33%', marginTop: -20 }}>
                        <DropDown data={rolesData} defaultText="Role" />
                    </View>
                    <View style={{ width: '33%', marginTop: -20 }}>
                        <DropDown data={unitsData} defaultText="Invitation Status" />
                    </View>
                </View>
            </View>

            {/* Table */}
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View style={styles.tableContainer}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <CheckBox
                            value={selectAll}
                            onValueChange={toggleSelectAll}
                            style={styles.checkbox}
                        />
                        <Text style={[styles.tableHeaderText, styles.username]}>USERNAME</Text>
                        <Text style={[styles.tableHeaderText, styles.role]}>ROLE</Text>
                        <Text style={[styles.tableHeaderText, styles.email]}>EMAIL</Text>
                        <Text style={[styles.tableHeaderText, styles.phone]}>PHONE NO.</Text>
                        <Text style={[styles.tableHeaderText, styles.projects]}>PROJECTS</Text>
                        <Text style={[styles.tableHeaderText, styles.dateJoined]}>DATE JOINED</Text>
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
            <TouchableOpacity style={styles.addButton}
                onPress={() => {
                    navigation.navigate("User", {
                        screen: "AddUser"
                    })
                }}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        marginBottom: 20,
    },
    filterTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.black,
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
        alignSelf: 'center'
    },
    tableContainer: {
        flex: 1,
    },
    tableHeader: {
        flexDirection: 'row',
        // backgroundColor: '#ddd',
        paddingVertical: 10,
    },
    tableHeaderText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: {
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    checkbox: {
        marginRight: 10,
    },
    username: {
        width: 120,
    },
    role: {
        width: 150,
    },
    email: {
        width: 190,
    },
    phone: {
        width: 170,
    },
    projects: {
        width: 160,
    },
    dateJoined: {
        width: 150,
    },
    copyIcon: {
        paddingHorizontal: 5,
    },
    dropdownButtonStyle: {
        width: 130,
        height: 40,
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.borderStroke,
        alignSelf: 'center',
        marginTop: -30,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    dropdownButtonStyle2: {
        width: 150,
        height: 40,
        backgroundColor: colors.white,
        // borderWidth: 0.5,
        // borderColor: colors.borderStroke,
        alignSelf: 'center',
        marginTop: -30,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    usernameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#2196F3',
        borderRadius: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    addButtonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default UserList;
