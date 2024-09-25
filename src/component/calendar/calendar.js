import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars'; // For Month View
import CalendarWeekView from './calendarweek';
import colors from '../constant/colors';

const CalendarScreen = () => {
    const [viewType, setViewType] = useState('month'); // 'month' or 'week'

    // Toggle between month and week views
    const toggleView = (view) => {
        setViewType(view);
    };

    return (
        <View style={styles.container}>
            {/* Toggle View between Month and Week */}
            <View style={styles.toggleView}>
                <TouchableOpacity
                    style={[styles.toggleButton, viewType === 'month' ? styles.activeButton : styles.inactiveButton]}
                    onPress={() => toggleView('month')}
                >
                    <Text style={styles.toggleText}>Month</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleButton, viewType === 'week' ? styles.activeButton : styles.inactiveButton]}
                    onPress={() => toggleView('week')}
                >
                    <Text style={styles.toggleText}>Week</Text>
                </TouchableOpacity>
            </View>

            {/* Conditionally render Month or Week view */}
            {viewType === 'month' && (
                <Calendar
                    markingType={'dot'}
                    markedDates={{
                        '2024-01-08': { marked: true, dotColor: 'green' },
                        '2024-01-10': { marked: true, dotColor: 'orange' },
                        '2024-01-17': { marked: true, dotColor: 'orange' },
                        '2024-01-19': { marked: true, dotColor: 'green' },
                        '2024-01-24': { marked: true, dotColor: 'green' },
                    }}
                    style={styles.calendar}
                    theme={{
                        todayTextColor: '#00adf5',
                        selectedDayBackgroundColor: '#00adf5',
                        arrowColor: '#00adf5',
                    }}
                />
            )}

            {/* Week View */}
            {viewType === 'week' && <CalendarWeekView />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5',
    },
    toggleView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        paddingVertical: 10,
        borderWidth: 0.7,
        borderRadius: 20,
        width: '60%',
        marginTop: 10,
        marginLeft: 10,
        borderColor: colors.primary
    },
    toggleButton: {
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        width: 100,
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: colors.white,
    },
    inactiveButton: {
        // backgroundColor: '#e0e0e0',
    },
    toggleText: {
        color: colors,
        // fontWeight: 'bold',
    },
    calendar: {
        borderRadius: 10,
        elevation: 4,
    },
});

export default CalendarScreen;
