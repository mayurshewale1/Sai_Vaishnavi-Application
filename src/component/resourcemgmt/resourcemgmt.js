import React, { useState } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Downloadsvg from '../assets/svg/downloadsvg.svg';
import Printsvg from '../assets/svg/print.svg';

// Define data for different sections
const inventoryData = [
    { id: 'I01', itemName: 'Wrench', category: 'Tools', quantityInStock: '150', unitPrice: '₹ 250', totalValue: '₹ 37,500', supplier: 'ABC Suppliers' },
    { id: 'I02', itemName: 'Screwdriver', category: 'Tools', quantityInStock: '200', unitPrice: '₹ 100', totalValue: '₹ 20,000', supplier: 'XYZ Suppliers' },
];

const indentData = [
    { indentId: 'ID01', itemId: 'I01', itemName: 'Wrench', quantityRequested: '10', requestDate: '12/05/2023', status: 'Pending', requestedBy: 'John Doe' },
    { indentId: 'ID02', itemId: 'I02', itemName: 'Screwdriver', quantityRequested: '5', requestDate: '13/05/2023', status: 'Approved', requestedBy: 'Jane Smith' },
];

const materialIssueData = [
    { indentId: 'ID01', itemId: 'I01', itemName: 'Wrench', quantityRequested: '10', requestDate: '12/05/2023', issuedTo: 'John Doe', status: 'Issued' },
    { indentId: 'ID02', itemId: 'I02', itemName: 'Screwdriver', quantityRequested: '5', requestDate: '13/05/2023', issuedTo: 'Jane Smith', status: 'Partial' },
];

const grnData = [
    { grnId: 'GRN01', supplier: 'ABC Suppliers', itemId: 'I01', itemName: 'Wrench', quantityReceived: '50', receivingDate: '10/05/2023', receivedBy: 'Mike Doe', status: 'Received' },
    { grnId: 'GRN02', supplier: 'XYZ Suppliers', itemId: 'I02', itemName: 'Screwdriver', quantityReceived: '100', receivingDate: '11/05/2023', receivedBy: 'Jane Smith', status: 'Received' },
];

const Resourcemgmt = ({ navigation }) => {

    const [filter, setFilter] = useState('Inventory');
    const [data, setData] = useState(inventoryData);
    const [selectAll, setSelectAll] = useState(false);
    const [filterText, setFilterText] = useState('Inventory');

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
        setFilterText(status);
        switch (status) {
            case 'Inventory':
                setData(inventoryData);
                break;
            case 'Indent':
                setData(indentData);
                break;
            case 'Material Issue':
                setData(materialIssueData);
                break;
            case 'GRN':
                setData(grnData);
                break;
        }
        setFilter(status);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.tableRow}>
            <CheckBox
                value={item.isSelected}
                onValueChange={() => toggleCheckbox(index)}
                style={styles.checkbox}
            />
            {
                filterText === "Inventory" ?
                    <>
                        <Text style={[styles.tableCell, styles.id]}>{item.id}</Text>
                        <Text style={[styles.tableCell, styles.username]}>{item.itemName}</Text>
                        <Text style={[styles.tableCell, styles.category]}>{item.category}</Text>
                        <Text style={[styles.tableCell, styles.amount]}>{item.quantityInStock}</Text>
                        <Text style={[styles.tableCell, styles.method]}>{item.unitPrice}</Text>
                        <Text style={[styles.tableCell, styles.creationDate]}>{item.totalValue}</Text>
                        <View style={{ flexDirection: 'row', width: 130, justifyContent: 'space-between' }}>
                            <Text style={[styles.tableCell]}>{item.supplier}</Text>
                            <TouchableOpacity style={styles.copyIcon}>
                                <MaterialCommunityIcons
                                    name="dots-vertical"
                                    color={colors.black}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                    : filterText === "Indent" ?
                        <>
                            <Text style={[styles.tableCell, styles.id]}>{item.indentId}</Text>
                            <Text style={[styles.tableCell, styles.id]}>{item.itemId}</Text>
                            <Text style={[styles.tableCell, styles.username]}>{item.itemName}</Text>
                            <Text style={[styles.tableCell, styles.amount]}>{item.quantityRequested}</Text>
                            <Text style={[styles.tableCell, styles.method]}>{item.requestDate}</Text>
                            <View style={{ width: 170 }}>
                                <View style={{
                                    backgroundColor: item?.status === "Succeeded" ? "#DBF2DC" : item?.status === "Declined" ? "#ffbfbf" : '#FDFD96',
                                    alignItems: 'center', padding: 5,
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
                                        color: item?.status === "Succeeded" ? "green" : item?.status === "Declined" ? "red" : 'orange',
                                    }]}>{item?.status}</Text>
                                </View>
                            </View>
                            <Text style={[styles.tableCell, styles.username]}>{item.requestedBy}</Text>
                        </>
                        : filterText === "Material Issue" ?
                            <>
                                <Text style={[styles.tableCell, styles.id]}>{item.indentId}</Text>
                                <Text style={[styles.tableCell, styles.id]}>{item.itemId}</Text>
                                <Text style={[styles.tableCell, styles.username]}>{item.itemName}</Text>
                                <Text style={[styles.tableCell, styles.amount]}>{item.quantityRequested}</Text>
                                <Text style={[styles.tableCell, styles.method]}>{item.requestDate}</Text>
                                <Text style={[styles.tableCell, styles.username]}>{item.issuedTo}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    alignItems:'center',
                                    width: 150,
                                }}>
                                    <View style={{
                                        backgroundColor: item?.status === "Issued" ? "#DBF2DC" : '#FDFD96',
                                        alignItems: 'center', padding: 5,
                                        borderRadius: 10,
                                        width: 100,
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly'

                                    }}>
                                        {
                                            item?.status === "Issued" ?
                                                <Ionicons
                                                    name="checkmark-circle-sharp"
                                                    color={"green"}
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
                                            color: item?.status === "Issued" ? "green" : 'orange',
                                        }]}>{item?.status}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.copyIcon}>
                                        <MaterialCommunityIcons
                                            name="dots-vertical"
                                            color={colors.black}
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </>
                            :
                            <>
                                <Text style={[styles.tableCell, styles.id]}>{item.grnId}</Text>
                                <Text style={[styles.tableCell, styles.supplier]}>{item.supplier}</Text>
                                <Text style={[styles.tableCell, styles.id]}>{item.itemId}</Text>
                                <Text style={[styles.tableCell, styles.username]}>{item.itemName}</Text>
                                <Text style={[styles.tableCell, styles.amount]}>{item.quantityReceived}</Text>
                                <Text style={[styles.tableCell, styles.creationDate]}>{item.receivingDate}</Text>
                                <Text style={[styles.tableCell, styles.username]}>{item.receivedBy}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    alignItems:'center',
                                    width: 150,
                                }}>
                                    <View style={{
                                        backgroundColor: item?.status === "Received" ? "#DBF2DC" : '#FDFD96',
                                        alignItems: 'center', padding: 5,
                                        borderRadius: 10,
                                        width: 100,
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly'

                                    }}>
                                        {
                                            item?.status === "Received" ?
                                                <Ionicons
                                                    name="checkmark-circle-sharp"
                                                    color={"green"}
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
                                            color: item?.status === "Received" ? "green" : 'orange',
                                        }]}>{item?.status}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.copyIcon}>
                                        <MaterialCommunityIcons
                                            name="dots-vertical"
                                            color={colors.black}
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </>
            }
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.filterContainer}>

                <Text style={styles.filterTitle}>{filterText}</Text>

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
                {['Inventory', 'Indent', 'Material Issue', 'GRN'].map((status) => (
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
                        {
                            filterText === "Inventory" ?
                                <>
                                    <Text style={[styles.tableHeaderText, styles.id]}>ITEM ID</Text>
                                    <Text style={[styles.tableHeaderText, styles.username]}>ITEM NAME</Text>
                                    <Text style={[styles.tableHeaderText, styles.category]}>CATEGORY</Text>
                                    <Text style={[styles.tableHeaderText, styles.amount]}>QUANTITY IN STOCK</Text>
                                    <Text style={[styles.tableHeaderText, styles.method]}>UNIT PRICE (₹)</Text>
                                    <Text style={[styles.tableHeaderText, styles.creationDate]}>TOTAL VALUE (₹)</Text>
                                    <Text style={[styles.tableHeaderText, styles.supplier]}>SUPPLIER</Text>
                                </>
                                : filterText === "Indent" ?
                                    <>
                                        <Text style={[styles.tableHeaderText, styles.id]}>INDENT ID</Text>
                                        <Text style={[styles.tableHeaderText, styles.id]}>ITEM ID</Text>
                                        <Text style={[styles.tableHeaderText, styles.username]}>ITEM NAME</Text>
                                        <Text style={[styles.tableHeaderText, styles.amount]}>QUANTITY REQUESTED</Text>
                                        <Text style={[styles.tableHeaderText, styles.method]}>REQUEST DATE</Text>
                                        <Text style={[styles.tableHeaderText, styles.method]}>STATUS</Text>
                                        <Text style={[styles.tableHeaderText, styles.username]}>REQUESTED BY</Text>
                                    </>
                                    : filterText === "Material Issue" ?
                                        <>
                                            <Text style={[styles.tableHeaderText, styles.id]}>INDENT ID</Text>
                                            <Text style={[styles.tableHeaderText, styles.id]}>ITEM ID</Text>
                                            <Text style={[styles.tableHeaderText, styles.username]}>ITEM NAME</Text>
                                            <Text style={[styles.tableHeaderText, styles.amount]}>QUANTITY ISSUED</Text>
                                            <Text style={[styles.tableHeaderText, styles.method]}>REQUEST DATE</Text>
                                            <Text style={[styles.tableHeaderText, styles.username]}>ISSUED TO</Text>
                                            <Text style={[styles.tableHeaderText, styles.status]}>STATUS</Text>
                                        </>
                                        :
                                        <>
                                            <Text style={[styles.tableHeaderText, styles.id]}>GRN ID</Text>
                                            <Text style={[styles.tableHeaderText, styles.supplier]}>SUPPLIER</Text>
                                            <Text style={[styles.tableHeaderText, styles.id]}>ITEM ID</Text>
                                            <Text style={[styles.tableHeaderText, styles.username]}>ITEM NAME</Text>
                                            <Text style={[styles.tableHeaderText, styles.amount]}>QUANTITY RECEIVED</Text>
                                            <Text style={[styles.tableHeaderText, styles.creationDate]}>RECEIVING DATE</Text>
                                            <Text style={[styles.tableHeaderText, styles.username]}>RECEIVED BY</Text>
                                            <Text style={[styles.tableHeaderText, styles.status]}>STATUS</Text>
                                        </>
                        }
                    </View>

                    {/* Table Data */}
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id || item.indentId || item.grnId}
                    />
                </View>
            </ScrollView>
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
    supplier: {
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
        flexDirection: 'row',
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

export default Resourcemgmt;
