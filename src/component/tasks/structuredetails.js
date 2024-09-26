import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTab } from '../context/tabcontext';
import MainHeader from '../drawer/mainheader';
import colors from '../constant/colors';
import Photos from './photos';
import MaterialUsed from './materialused';
import User from './user';

const StructureDetails = ({ route, navigation }) => {

    const { activeTab } = useTab();
    const [filter, setFilter] = useState('Timeline');
    const [data, setData] = useState([]);

    // Filter data based on selected filter
    const filterData = (status) => {
        setFilter(status); // Set the current filter
    };


    return (
        <View style={{ flex: 1 }}>
            <MainHeader navigation={navigation} tab={activeTab} />
            <View style={styles.mainHeader}>
                <Text style={styles.headerText}>Reinforce rooftop structure</Text>
            </View>
            <View style={styles.filterContainer2}>
                {['Timeline', 'Photos', 'Material Used', 'Users'].map((status) => (
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

            <ScrollView style={styles.container}>
                {
                    filter === "Timeline" ?
                        <View>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Progress Update</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Work Done:</Text>
                                <Text style={styles.value}>45/600 cm</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Skilled Workers:</Text>
                                <Text style={styles.value}>3 workers</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Unskilled Workers:</Text>
                                <Text style={styles.value}>6 workers</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Material Used:</Text>
                                <Text style={styles.value}>diesel - 25 liters | Cement - 12 bags</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Subcontractor:</Text>
                                <Text style={styles.value}>Excavation Contractor</Text>
                            </View>

                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL or local file
                                    style={styles.image}
                                />
                                <Image
                                    source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL or local file
                                    style={styles.image}
                                />
                            </View>

                            <View style={styles.timestamp}>
                                <Text style={styles.timestampText}>5:06 AM by Supervisor1</Text>
                                <Text style={styles.timestampText}>June 30</Text>
                            </View>

                            <View style={styles.task}>
                                <Text style={styles.taskHeader}>Task Created</Text>
                                <Text style={styles.timestampText}>11:46 AM by Supervisor1</Text>
                                <Text style={styles.timestampText}>June 24</Text>
                            </View>
                        </View>
                        :
                        filter === "Photos" ?
                            <Photos />
                            :
                            filter === "Material Used" ?
                                <MaterialUsed />
                                :
                                <User />
                }
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f9',
    },
    mainHeader: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 15
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.black,
        width: '50%',
        textAlign: 'right'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    timestamp: {
        marginVertical: 10,
    },
    timestampText: {
        color: '#555',
        fontSize: 14,
    },
    task: {
        marginTop: 20,
    },
    taskHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.black
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

export default StructureDetails;