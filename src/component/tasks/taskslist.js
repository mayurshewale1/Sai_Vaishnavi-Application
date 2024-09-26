import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../constant/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Move from '../assets/svg/move.svg';
import DropDown from '../input/dropdown';

const TaskItem = ({ item }) => {
    return (
        <View style={styles.taskCard}>
            <View style={styles.taskHeader}>
                <Text style={styles.taskTitle}>{item.title}</Text>
            </View>
            <View style={styles.taskHeader}>
                <View>
                    <Text style={styles.taskCategory}>{item.category}</Text>
                    <View style={styles.avatarsContainer}>
                        {item.avatars.map((avatar, index) => (
                            <Image key={index} source={{ uri: avatar }} style={styles.avatar} />
                        ))}
                    </View>
                </View>
                <View style={styles.taskSubHeader}>
                    <MaterialCommunityIcons
                        name="clock-time-three-outline"
                        color={colors.graychip}
                        size={20}
                    />
                    <Text style={styles.dueDate}>{item.due}</Text>
                </View>
            </View>
        </View>
    );
};


const unitsData = [
    { title: 'Category 1' },
    { title: 'Category 2' },
    { title: 'Category 3' },
];

const rolesData = [
    { title: 'User 1' },
    { title: 'User 2' },
    { title: 'User 3' },
];

const projectData = [
    { title: 'Project 1' },
    { title: 'Project 2' },
    { title: 'Project 3' },
];

const TasksList = ({ route, navigation}) => {
    const sections = [
        {
            title: 'To-Do List',
            count: 24,
            color: colors.primary,
            tasks: [
                {
                    title: 'Reinforce rooftop structure',
                    category: 'Structural Engineering',
                    due: 'Due in 4 days',
                    avatars: [
                        'https://via.placeholder.com/50', // Replace with actual image URLs
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50'
                    ]
                },
                // Add more tasks here
            ]
        },
        {
            title: 'In Progress',
            count: 2,
            color: 'orange',
            tasks: [
                {
                    title: 'Reinforce rooftop structure',
                    category: 'Structural Engineering',
                    due: 'Due in 4 days',
                    avatars: [
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50'
                    ]
                }
            ]
        },
        {
            title: 'On Hold',
            count: 1,
            color: colors.rejected,
            tasks: [
                {
                    title: 'Reinforce rooftop structure',
                    category: 'Structural Engineering',
                    due: 'Due in 4 days',
                    avatars: [
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50'
                    ]
                }
            ]
        },
        {
            title: 'Completed',
            count: 20,
            color: 'green',
            tasks: [
                {
                    title: 'Reinforce rooftop structure',
                    category: 'Structural Engineering',
                    due: 'Due in 4 days',
                    avatars: [
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50'
                    ]
                },
                {
                    title: 'Reinforce rooftop structure',
                    category: 'Structural Engineering',
                    due: 'Due in 4 days',
                    avatars: [
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50'
                    ]
                },
                {
                    title: 'Reinforce rooftop structure',
                    category: 'Structural Engineering',
                    due: 'Due in 4 days',
                    avatars: [
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50'
                    ]
                }
            ]
        }
    ];

    return (
        <View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>Users</Text>
                <View style={styles.dropdownContainer}>
                    <View style={{ width: '33%', marginTop: -20 }}>
                        <DropDown data={projectData} defaultText="Category" />
                    </View>
                    <View style={{ width: '33%', marginTop: -20 }}>
                        <DropDown data={rolesData} defaultText="Users" />
                    </View>
                    <View style={{ width: '33%', marginTop: -20 }}>
                        <DropDown data={unitsData} defaultText="Date" />
                    </View>
                </View>
            </View>
            <FlatList
                data={sections}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View>
                        <View style={[styles.sectionHeader, {
                            borderTopColor: item?.color
                        }]}>
                            <Text style={styles.sectionTitle}>
                                {item.title} ({item.count})
                            </Text>
                            <TouchableOpacity style={styles.plusIconContainer}
                                onPress={() => {
                                    navigation.navigate("Tasks", {
                                        screen: "Taskdetails"
                                    })
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="plus"
                                    color={colors.primary}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        {
                            item.title === "On Hold"
                                ?
                                <View style={styles.moveBtnContainer1}>
                                    <TouchableOpacity style={styles.moveBtnContainer}>
                                        <Move
                                            width={'20'}
                                            height={'20'}
                                            fill="none"
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        />
                                        <Text style={styles.moveBtnContainerText}>Move Card Here</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                item.tasks.map((task, index) => (
                                    <TaskItem key={index} item={task} />
                                ))
                        }
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 10,
        borderTopWidth: 3,
        width: '95%',
        alignSelf: 'center'
    },
    moveBtnContainer1: {
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 10,
        width: '95%',
        alignSelf: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black
    },
    taskCard: {
        backgroundColor: colors.white,
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 2,
        width: '95%',
        alignSelf: 'center'
    },
    taskHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    taskSubHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
        justifyContent: 'space-between',
        marginTop: 30
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black
    },
    dueDate: {
        fontSize: 12,
        color: colors.grey
    },
    taskCategory: {
        fontSize: 14,
        color: colors.grey
    },
    avatarsContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 3
    },
    plusIconContainer: {
        backgroundColor: "#4F9AD11A",
        padding: 10,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    moveBtnContainer: {
        borderWidth: 1.5,
        borderColor: colors.gray,
        backgroundColor: "#F2F2F2",
        borderStyle: 'dashed',
        width: '95%',
        alignSelf: 'center',
        padding: 13,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    moveBtnContainerText: {
        color: colors.black,
        fontSize: 14,
        left: 10
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
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
        alignSelf: 'center',
        marginBottom: 10,
    },
});

export default TasksList;
