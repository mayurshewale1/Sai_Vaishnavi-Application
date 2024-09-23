import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constant/colors';
import Logo from '../assets/svg/companysvg.svg';


const ProjectList = ({ route, navigation }) => {
    const [filter, setFilter] = useState('All Projects');
    const projects = [
        {
            id: 1,
            name: 'Restaurant Construction',
            status: 'In Progress',
            progress: 0.5,
            dueDate: '12/05/2020',
            tasksDone: 12,
        },
        {
            id: 2,
            name: 'Restaurant Construction',
            status: 'Completed',
            progress: 1,
            dueDate: '12/05/2020',
            tasksDone: 12,
        },
        {
            id: 3,
            name: 'Restaurant Construction',
            status: 'On Hold',
            progress: 0.25,
            dueDate: '12/05/2020',
            tasksDone: 12,
        },
    ];

    const filteredProjects = projects.filter((project) => {
        if (filter === 'All Projects') return true;
        return project.status === filter;
    });

    const getStatusStyle = (status) => {
        switch (status) {
            case 'In Progress':
                return styles.inProgress;
            case 'Completed':
                return styles.completed;
            case 'On Hold':
                return styles.onHold;
            default:
                return styles.inProgress;
        }
    };

    const getProjectCount = (status) => {
        if (status === 'All Projects') return projects.length;
        return projects.filter((project) => project.status === status).length;
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Projects</Text>
                <View style={styles.filterContainer}>
                    {['All Projects', 'In Progress', 'Completed', 'On Hold'].map((status) => (
                        <TouchableOpacity
                            key={status}
                            onPress={() => setFilter(status)}
                            style={[
                                styles.filterButton,
                                filter === status && styles.filterButtonActive
                            ]}
                        >
                            {/* <Text style={styles.filterText}>({getProjectCount(status)}) {status}</Text> */}
                            <Text style={styles.filterText}>{status}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.projectList}>
                {filteredProjects.map((project) => (
                    <View key={project.id} style={styles.projectCard}>
                        <View style={styles.projectInfo}>
                            <View style={styles.projectHeadingStyle}>
                                <View>
                                    <Logo
                                        width={'30'}
                                        height={'30'}
                                        fill="none"
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.projectTitle}>Rooftopicall</Text>
                                    <Text style={styles.projectSubtitle}>Modern Cafe</Text>
                                </View>
                            </View>
                            <Text style={styles.projectName}>{project.name}</Text>
                            <Text style={getStatusStyle(project.status)}>{project.status}</Text>
                            <View style={styles.progressBar}>
                                <View style={[styles.progress, { width: `${project.progress * 100}%` }]} />
                            </View>
                            <View style={styles.taskInfo}>
                                <Text style={styles.tasksDone}>{project.tasksDone} Task Done</Text>
                                <Text style={styles.dueDate}>Due date: {project.dueDate}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.addButton}
                onPress={() => {
                    navigation.navigate("Project", {
                        screen: "Createnewtasks"
                    })
                }}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf0f8',
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        padding: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        borderWidth: 0.6,
        borderRadius: 25,
        width: '100%',
        alignSelf: 'center'
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
    projectList: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    projectCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    projectInfo: {
        flexDirection: 'column',
    },
    projectHeadingStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    projectSubtitle: {
        fontSize: 14,
        color: '#888',
    },
    projectName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginVertical: 5,
    },
    inProgress: {
        color: '#ffcc00',
        backgroundColor: '#fff5cc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    completed: {
        color: '#4CAF50',
        backgroundColor: '#e8f5e9',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    onHold: {
        color: '#f44336',
        backgroundColor: '#ffebee',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    progressBar: {
        height: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        marginVertical: 10,
    },
    progress: {
        height: '100%',
        backgroundColor: '#2196F3',
        borderRadius: 3,
    },
    taskInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tasksDone: {
        fontSize: 14,
        color: '#333',
    },
    dueDate: {
        fontSize: 14,
        color: '#888',
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

export default ProjectList;
