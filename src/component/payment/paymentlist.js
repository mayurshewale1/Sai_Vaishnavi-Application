import React, { useState } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Downloadsvg from '../assets/svg/downloadsvg.svg';
import Printsvg from '../assets/svg/print.svg';



const reportsData = [
    { id: 'P01', username: 'Ananya Sharma', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'VISA', cardNumber: '**** 4242', creationDate: 'Mar 23, 2022', status: 'Succeeded' },
    { id: 'P02', username: 'Rahul Mehta', category: 'Plumber', amount: '₹ 15,250', dateJoined: '12/12/2022', method: 'MasterCard', cardNumber: '**** 2332', creationDate: 'Mar 24, 2022', status: 'Pending' },
    { id: 'P03', username: 'Vikram Singh', category: 'Electrician', amount: '₹ 10,453', dateJoined: '15/10/2022', method: 'VISA', cardNumber: '**** 4242', creationDate: 'Mar 23, 2022', status: 'Declined' },
    { id: 'P04', username: 'Neha Choudhary', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'Bank Transfer', creationDate: 'Mar 23, 2022', status: 'Succeeded' },
    { id: 'P05', username: 'Amit Patel', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'Bank Transfer', creationDate: 'Mar 23, 2022', status: 'Succeeded' },
    { id: 'P06', username: 'Rahul Mehta', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'MasterCard', cardNumber: '**** 2332', creationDate: 'Mar 23, 2022', status: 'Pending' },
    { id: 'P07', username: 'Rahul Mehta', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'MasterCard', cardNumber: '**** 2332', creationDate: 'Mar 23, 2022', status: 'Declined' },
    { id: 'P08', username: 'Rahul Mehta', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'MasterCard', cardNumber: '**** 2332', creationDate: 'Mar 23, 2022', status: 'Succeeded' },
    { id: 'P09', username: 'Rahul Mehta', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'MasterCard', cardNumber: '**** 2332', creationDate: 'Mar 23, 2022', status: 'Pending' },
    { id: 'P010', username: 'Rahul Mehta', category: 'Electrician', amount: '₹ 19,566', dateJoined: '01/01/2023', method: 'MasterCard', cardNumber: '**** 2332', creationDate: 'Mar 23, 2022', status: 'Declined' },
];

const projectData = [
    { title: 'Project 1' },
    { title: 'Project 2' },
    { title: 'Project 3' },
];

const PaymentList = ({ navigation }) => {
    const [filter, setFilter] = useState('All Payment');
    const [data, setData] = useState(reportsData);
    const [selectAll, setSelectAll] = useState(false);

    const toggleCheckbox = (index) => {
        const updatedData = [...data];
        updatedData[index].isSelected = !updatedData[index].isSelected;
        setData(updatedData);
        setSelectAll(updatedData.every(item => item.isSelected));
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

    // Filter data based on selected filter
    const filterData = (status) => {
        if (status === 'All Payment') {
            setData(reportsData); // Show all data
        } else {
            const filtered = reportsData.filter(item => {
                if (status === 'In Progress') return item.status === 'Pending';
                if (status === 'Pending') return item.status === 'Pending';
                if (status === 'Completed') return item.status === 'Succeeded';
            });
            setData(filtered);
        }
        setFilter(status); // Set the current filter
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.tableRow}>
            <CheckBox
                value={item.isSelected}
                onValueChange={() => toggleCheckbox(index)}
                style={styles.checkbox}
            />
            <Text style={[styles.tableCell, styles.id]}>{item.id}</Text>
            <Text style={[styles.tableCell, styles.username]}>{item.username}</Text>
            <Text style={[styles.tableCell, styles.category]}>{item.category}</Text>
            <Text style={[styles.tableCell, styles.amount]}>{item.amount}</Text>
            <Text style={[styles.tableCell, styles.method]}>{item.method} {item.cardNumber || ''}</Text>
            <Text style={[styles.tableCell, styles.creationDate]}>{item.creationDate}</Text>
            <View style={{ flexDirection: 'row', width: 130, justifyContent: 'space-around' }}>
                <View style={{
                    backgroundColor: item?.status === "Succeeded" ? "#DBF2DC" : item?.status === "Declined" ? "#ffbfbf" : '#FDFD96',
                    width: 110, alignItems: 'center', padding: 5,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'

                }}>
                    {
                        item?.status === "Succeeded" ?
                            <Ionicons
                                name="checkmark-circle-sharp"
                                color={"green"}
                                size={20}
                            />
                            :
                            item?.status === "Declined" ?
                                <MaterialCommunityIcons
                                    name="minus-circle"
                                    color={colors.rejected}
                                    size={20}
                                />
                                :
                                <Ionicons
                                    name="time-sharp"
                                    color={"orange"}
                                    size={20}
                                />

                    }

                    <Text style={[{
                        color: item?.status === "Succeeded" ? "green" : item?.status === "Declined" ? "red" : 'orange'
                    }]}>{item.status}</Text>
                </View>
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
            <View style={styles.filterContainer}>
                
                <Text style={styles.filterTitle}>Payments</Text>
             
                <View style={styles.dropdownContainer}>
                    <View style={styles.dropdownSubContainer}>
                        <Downloadsvg
                            width={'20'}
                            height={'20'}
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        />
                        <Text style={styles.dropdownSubContainerText}>Export</Text>
                    </View>
                    <View style={styles.dropdownSubContainer}>
                        <Printsvg
                            width={'20'}
                            height={'20'}
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        />
                        <Text style={styles.dropdownSubContainerText}>Print</Text>
                    </View>
                </View>
            </View>

            <View style={styles.filterContainer2}>
                {['All Payment', 'In Progress', 'Pending', 'Completed'].map((status) => (
                    <TouchableOpacity
                        key={status}
                        onPress={() => filterData(status)}
                        style={[
                            styles.filterButton,
                            filter === status && styles.filterButtonActive
                        ]}
                    >
                        <Text style={styles.filterText}>{status}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View style={styles.tableContainer}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <CheckBox
                            value={selectAll}
                            onValueChange={toggleSelectAll}
                            style={styles.checkbox}
                        />
                        <Text style={[styles.tableHeaderText, styles.id]}>ID</Text>
                        <Text style={[styles.tableHeaderText, styles.username]}>PAID TO</Text>
                        <Text style={[styles.tableHeaderText, styles.category]}>CATEGORY</Text>
                        <Text style={[styles.tableHeaderText, styles.amount]}>AMOUNT</Text>
                        <Text style={[styles.tableHeaderText, styles.method]}>P. METHOD</Text>
                        <Text style={[styles.tableHeaderText, styles.creationDate]}>CREATION DATE</Text>
                        <Text style={[styles.tableHeaderText, styles.status]}>STATUS</Text>
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
                    navigation.navigate("Payment", {
                        screen: "Newpayment"
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
    tableContainer: {
        flex: 1,
    },
    tableHeader: {
        flexDirection: 'row',
        paddingVertical: 10,
        // backgroundColor: '#ddd',
    },
    tableHeaderText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.black
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: colors.black

    },
    tableCell: {
        paddingHorizontal: 10,
        textAlign: 'center',
        color: colors.black
    },
    checkbox: {
        marginRight: 10,
    },
    id: {
        width: 60,
    },
    username: {
        width: 150,
    },
    category: {
        width: 150,
    },
    amount: {
        width: 120,
    },
    method: {
        width: 180,
    },
    creationDate: {
        width: 150,
    },
    status: {
        width: 150,
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
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        marginTop: 15,
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
    dropdownSubContainer: {
        backgroundColor: colors.white,
        padding: 10,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        flexDirection:'row',
    },
    dropdownSubContainerText: {
        color: colors.black,
        fontSize: 14,
        fontWeight: '400'
    },
    filterContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        padding: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        borderWidth: 0.6,
        borderRadius: 25,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 10
    },
    filterButton: {
        padding: 10,
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 10,
    },
    filterButtonActive: {
        backgroundColor: colors.white,
    },
    filterText: {
        color: colors.black,
        fontSize: 12
    },
});

export default PaymentList;
