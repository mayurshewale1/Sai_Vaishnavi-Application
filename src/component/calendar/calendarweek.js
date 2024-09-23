import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Sample week days data
const weekDays = [
    { date: '2024-04-25', day: 'Mon', label: '25 Apr, Mo' },
    { date: '2024-04-26', day: 'Tue', label: '26 Apr, Tu' },
    { date: '2024-04-27', day: 'Wed', label: '27 Apr, We' },
    { date: '2024-04-28', day: 'Thu', label: '28 Apr, Th' },
    { date: '2024-04-29', day: 'Fri', label: '29 Apr, Fr' },
    { date: '2024-04-30', day: 'Sat', label: '30 Apr, Sa' },
];

// Sample events data
const events = {
    '2024-04-25': [{ title: 'Meeting with rooftop restaurant', time: '09:00', duration: 2, color: 'green' }],
    '2024-04-26': [],
    '2024-04-27': [{ title: 'Electric Work', time: '11:00', duration: 1, color: 'green' }],
    '2024-04-28': [],
    '2024-04-29': [{ title: 'Brick Work', time: '12:00', duration: 2, color: 'orange' }],
    '2024-04-30': [{ title: 'Plumbing', time: '15:00', duration: 1, color: 'green' }],
};

// Time slots for each day (from 7 AM to 6 PM)
const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

const CalendarWeekView = () => {
    return (
        <ScrollView horizontal style={styles.container}>
            <View>
                {/* Render time column */}
                <View style={styles.timeColumn}>
                    {timeSlots.map((time) => (
                        <View key={time} style={styles.timeSlot}>
                            <Text style={styles.timeText}>{time}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Render days */}
            {weekDays.map((day) => (
                <View key={day.date} style={styles.dayColumn}>
                    {/* Day header */}
                    <View style={styles.dayHeader}>
                        <Text style={styles.dayHeaderText}>{day.label}</Text>
                    </View>
                    {/* Render time slots for each day */}
                    {timeSlots.map((time, index) => (
                        <View key={index} style={styles.timeSlot}>
                            {events[day.date]?.map((event, idx) => (
                                event.time === time && (
                                    <View
                                        key={idx}
                                        style={[
                                            styles.eventBox,
                                            { backgroundColor: event.color, height: event.duration * 50 }, // Adjust height based on event duration
                                        ]}
                                    >
                                        <Text style={styles.eventText}>{event.title}</Text>
                                    </View>
                                )
                            ))}
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f0f0f5',
        width:'95%'
    },
    timeColumn: {
        width: 80,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
    },
    timeSlot: {
        height: 50, // Each hour slot
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    timeText: {
        color: '#333',
    },
    dayColumn: {
        width: width / 3, // Width for each day column
        borderRightWidth: 1,
        borderRightColor: '#ccc',
    },
    dayHeader: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
    },
    dayHeaderText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    eventBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    eventText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CalendarWeekView;