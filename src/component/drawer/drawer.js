import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constant/colors';
import Project from '../assets/svg/project.svg';
import ProjectBlack from '../assets/svg/projectsblack.svg';
import Tasks from '../assets/svg/tasks.svg';
import TasksBlack from '../assets/svg/tasksblack.svg';
import Payments from '../assets/svg/payment.svg';
import PaymentsBlack from '../assets/svg/paymentblack.svg';
import Resource from '../assets/svg/resourcemgmt.svg';
import ResourceBlack from '../assets/svg/resourceblack.svg';
import Users from '../assets/svg/users.svg';
import UsersBlack from '../assets/svg/usersblack.svg';
import Calender from '../assets/svg/calendar.svg';
import CalenderBlack from '../assets/svg/calendarblack.svg';
import Reports from '../assets/svg/reports.svg';
import ReportsBlack from '../assets/svg/reportsblack.svg';
import Logout from '../assets/svg/logout.svg';
import LogoutBlack from '../assets/svg/logoutblack.svg';


const Drawer = (props) => {
    // Function to handle tab click
    const handleTabClick = (tabId, tabName) => {
        props.func(tabId, tabName); // Pass tab change to parent
    };

    return (
        <View style={styles.drawerContainer}>
            {/* Close Button */}
            <View style={styles.crossBtnContaine}>
                <TouchableOpacity onPress={() => props.onClose()}>
                    <Entypo
                        name="cross"
                        color={colors.white}
                        size={30}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Image style={{ width: 250, height: 100 }}
                    source={require('../assets/images/logo.png')}
                />
            </View>

            <ScrollView style={{ width: '95%', alignSelf: 'center', marginTop: 30 }}>
                {/* Dashboard */}
                <TouchableOpacity
                    style={props.activeTab === 1 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(1, 'CreateProject')}
                >
                    {
                        props.activeTab === 1 ?
                            <ProjectBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            /> :
                            <Project
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                    }
                    <Text style={props.activeTab === 1 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Projects
                    </Text>
                </TouchableOpacity>

                {/* Transactions */}
                <TouchableOpacity
                    style={props.activeTab === 2 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(2, 'Tasks')}
                >
                    {
                        props.activeTab === 2 ?
                            <TasksBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Tasks
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                    }
                    <Text style={props.activeTab === 2 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Tasks
                    </Text>
                </TouchableOpacity>

                {/* Help Center */}
                <TouchableOpacity
                    style={props.activeTab === 3 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(3, 'Payments')}
                >
                    {
                        props.activeTab === 3 ?
                            <PaymentsBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Payments
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                    }
                    <Text style={props.activeTab === 3 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Payments
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={props.activeTab === 4 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(4, 'Resource magnt')}
                >
                    {
                        props.activeTab === 4 ?
                            <ResourceBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Resource
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                    }
                    <Text style={props.activeTab === 4 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Resource magnt
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={props.activeTab === 5 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(5, 'Users')}
                >
                    {
                        props.activeTab === 5 ?
                            <UsersBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Users
                                width="25"
                                height="25"
                                style={styles.img}
                            />

                    }
                    <Text style={props.activeTab === 5 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Users
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={props.activeTab === 6 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(6, 'Calender')}
                >
                    {
                        props.activeTab === 6 ?
                            <CalenderBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Calender
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                    }
                    <Text style={props.activeTab === 6 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Calender
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={props.activeTab === 7 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(7, 'Reports')}
                >
                    {
                        props.activeTab === 7 ?
                            <ReportsBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Reports
                                width="25"
                                height="25"
                                style={styles.img}
                            />

                    }
                    <Text style={props.activeTab === 7 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Reports
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={props.activeTab === 8 ? styles.activeMenuItemStyle : styles.menuItemStyle}
                    onPress={() => handleTabClick(8, 'Logout')}
                >
                    {
                        props.activeTab === 8 ?
                            <LogoutBlack
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                            :
                            <Logout
                                width="25"
                                height="25"
                                style={styles.img}
                            />
                    }

                    <Text style={props.activeTab === 8 ? styles.activeMenuItemTextStyle : styles.menuItemTextStyle}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Drawer;
