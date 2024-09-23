import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Modal from 'react-native-modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import Uploadsvg from '../assets/svg/upload.svg';
import Camerasvg from '../assets/svg/camerasvg.svg';
import Photosvg from '../assets/svg/photosvg.svg';
import colors from '../constant/colors';

const Documentpicker = ({ setDocumentUrl }) => {
    const [fileResponses, setFileResponses] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleDocumentSelection = async () => {
        try {
            const responses = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
                allowMultiSelection: true
            });
            const newResponses = responses.map(response => ({
                uri: response.uri,
                type: response.type,
                name: response.name,
            }));
            setFileResponses([...fileResponses, ...newResponses]);
            setDocumentUrl([...fileResponses, ...newResponses]);
        } catch (err) {
            console.log("err::::::::::::::", err);
            if (DocumentPicker.isCancel(err)) {
                Alert.alert('Canceled');
            } else {
                Alert.alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    const handleImagePicker = (type) => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        if (type === 'camera') {
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    Alert.alert('Canceled');
                } else if (response.errorCode) {
                    Alert.alert('ImagePicker Error: ' + response.errorMessage);
                } else {
                    const newResponses = response.assets.map(asset => ({
                        uri: asset.uri,
                    }));
                    setFileResponses([...fileResponses, ...newResponses]);
                    setDocumentUrl([...fileResponses, ...newResponses]);
                }
            });
        } else if (type === 'gallery') {
            launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    Alert.alert('Canceled');
                } else if (response.errorCode) {
                    Alert.alert('ImagePicker Error: ' + response.errorMessage);
                } else {
                    const newResponses = response.assets.map(asset => ({
                        uri: asset.uri,
                    }));
                    setFileResponses([...fileResponses, ...newResponses]);
                    setDocumentUrl([...fileResponses, ...newResponses]);
                }
            });
        }

        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Add photos (optional)</Text>
            <View style={styles.flexContainer}>
                <View style={styles.uploadBox}>
                    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                        <Uploadsvg
                            width={'24'}
                            height={'24'}
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        />
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Browse files</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                isVisible={isModalVisible}
                style={styles.modal}
                backdropColor="rgba(0, 0, 0, 0.5)"
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Entypo
                            name="circle-with-cross"
                            color={colors.black}
                            size={20}
                        />
                    </TouchableOpacity>
                    <View style={styles.modalHeader}>
                        <View style={styles.modalHeaderLine}></View>
                    </View>
                    <Text style={styles.modalTitle}>Select Photos from</Text>
                    <TouchableOpacity onPress={() => handleImagePicker('camera')} style={styles.modalButton}>
                        <Camerasvg
                            width={'30'}
                            height={'30'}
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        />
                        <Text style={styles.modalButtonText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleImagePicker('gallery')} style={styles.modalButton}>
                        <Photosvg
                            width={'30'}
                            height={'30'}
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        />
                        <Text style={styles.modalButtonText}>Phone Gallery</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '40%'
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 10,
        width: '100%'
    },
    flexContainer: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: '#a3a3a3',
        borderStyle: 'dashed',
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonContainer: {
        padding: 5,
        borderRadius: 10,
        borderColor: colors.primary,
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 10,
        color: colors.primary,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    modalHeader: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    modalHeaderLine: {
        width: 40,
        height: 4,
        backgroundColor: '#ccc',
        borderRadius: 2,
    },
    modalTitle: {
        fontSize: 18,
        color: colors.primary,
        marginBottom: 20,
    },
    modalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    modalButtonText: {
        fontSize: 18,
        color: colors.primary,
        marginLeft: 10,
    },
});

export default Documentpicker;
