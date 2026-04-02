import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Functional Component
const KartuProfil = ({students}) => {
    return (
        <View style={styles.profileCard}>
            <Image 
                source={{uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}} 
                style={styles.avatar} 
            />
            <View style={styles.profileInfo}>
                <Text style={styles.studentName}>{students.nama}</Text>
                <Text style={styles.studentNim}>{students.nim}</Text>
                <Text style={styles.studentProdi}>{students.prodi}</Text>
            </View>
        </View>
    );
};

export default KartuProfil;

const styles = StyleSheet.create({
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    profileInfo: {
        flex: 1,
    },
    studentName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    studentNim: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    studentProdi: {
        fontSize: 14,
        color: '#0056A0',
        marginTop: 4,
        fontWeight: '600',
    },
});