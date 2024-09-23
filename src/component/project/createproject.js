import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native'
import moment from 'moment'
import Entypo from 'react-native-vector-icons/Entypo';
import Textinput from '../input/textinput';
import DobInput from '../button/dobinput';
import DocumentUpload from '../button/uploadoc';
import PrimaryButton from '../button/primarybutton';
import { styles } from './styles';
import MainHeader from '../drawer/mainheader';
import colors from '../constant/colors';
import { useTab } from '../context/tabcontext';


const Createnewtasks = ({ navigation, route }) => {

  const { activeTab } = useTab();
  const [priority, setPriority] = useState('')
  const [dob, setDob] = useState('')
  const [dob2, setDob2] = useState('')
  const [documentUrl, setDocumentUrl] = useState([])
  const [addUser, setAddUser] = useState([])
  const [taskName, setTaskName] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})


  const getDob = dob => {
    setDob(dob);
    if (errors.dob) {
      setErrors(prevErrors => ({ ...prevErrors, dob: "" }));
    }
  };

  const getDob2 = dob => {
    setDob2(dob);
    if (errors.dob2) {
      setErrors(prevErrors => ({ ...prevErrors, dob2: "" }));
    }
  };

  const handleRemoveDocument = (item) => {
    setDocumentUrl(documentUrl.filter(name => name !== item));
  };

  useEffect(() => {
    if (route?.params?.params) {
      setAddUser(route?.params?.params)
    }
  }, [route?.params?.params])

  const validateFields = () => {
    let errors = {};
    let isValid = true;

    if (!taskName.trim()) {
      errors.taskName = "Task name is required *";
      isValid = false;
    }

    if (!taskCategory.trim()) {
      errors.taskCategory = "Task category is required *";
      isValid = false;
    }

    if (!priority.trim()) {
      errors.priority = "Priority is required *";
      isValid = false;
    }

    if (!dob.trim()) {
      errors.dob = "Start date is required *";
      isValid = false;
    }

    if (!dob2.trim()) {
      errors.dob2 = "Due date is required *";
      isValid = false;
    }

    if (!description.trim()) {
      errors.description = "Description is required *";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  const handleSubmit = () => {
    if (validateFields()) {
      // Proceed with form submission or navigation
      navigation.navigate("Constructionmanagementroute", {
        params: 0
      });
    } else {
      // Alert.alert("Validation Error", "Please fill out all required fields.");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <MainHeader navigation={navigation} tab={activeTab} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 30 }}>

        <Text style={styles.headingText}>New Project</Text>
        <Textinput
          // style={styles.input}
          label={"Project name"}
          placeholder={"Project name"}
          value={taskName}
          onChangeText={(text) => {
            setTaskName(text);
            if (errors.taskName) {
              setErrors(prevErrors => ({ ...prevErrors, taskName: '' }));
            }
          }}
          error={!!errors.taskName}
        />
        {errors.taskName && <Text style={styles.errText}>{errors.taskName}</Text>}

        <Textinput
          // style={[styles.input]}
          placeholder={"Project Description"}
          value={taskCategory}
          label={"Project Description"}
          onChangeText={(text) => {
            setTaskCategory(text);
            if (errors.taskCategory) {
              setErrors(prevErrors => ({ ...prevErrors, taskCategory: '' }));
            }
          }}
          error={!!errors.taskCategory}
        />
        {errors.taskCategory && <Text style={styles.errText}>{errors.taskCategory}</Text>}

        <View style={{
          flexDirection: 'row', alignSelf: 'center',
          alignItems: 'center',
          width: '95%', flexWrap: 'wrap',
          marginTop: 10
        }}>
          <View style={styles.createMapContainer}>
            <Text style={styles.assignedUserText}>Person In Charge</Text>
            <View style={{ width: '80%' }}>
              <PrimaryButton title={"Add"} btnStyle={styles.primarycontainer} icon={"icon"}
              />
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'row', alignSelf: 'center',
          alignItems: 'center',
          width: '95%', flexWrap: 'wrap',
          marginTop: 10
        }}>
          <View style={styles.createMapContainer}>
            <Text style={styles.assignedUserText}>Assigned users</Text>
            <View style={{ width: '80%' }}>
              <PrimaryButton title={"Add"} btnStyle={styles.primarycontainer} icon={"icon"}
              />
            </View>
          </View>
        </View>

        {/* Choose Date */}
        <View style={styles.taskType}>
          <Text style={styles.taskTypeText}>Choose date</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 10, alignSelf: 'center' }}>
            <View style={{ width: '50%' }}>
              <DobInput
                label={"Start Date"}
                mydob={getDob}
                value={dob.length > 0 ? moment(dob, 'DD-MM-YYYY').format('DD.MM.YYYY') : dob}
                error={!!errors.dob}
              />
              {errors.dob && <Text style={styles.errText}>{errors.dob}</Text>}
            </View>

            <View style={{ width: '50%' }}>
              <DobInput
                label={"Due Date"}
                mydob={getDob2}
                value={dob2.length > 0 ? moment(dob2, 'DD-MM-YYYY').format('DD.MM.YYYY') : dob2}
                error={!!errors.dob2}
              />
              {errors.dob2 && <Text style={styles.errText}>{errors.dob2}</Text>}
            </View>

          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: 10, width: '100%', flexWrap: 'wrap' }}>
            <DocumentUpload setDocumentUrl={setDocumentUrl} />
            {
              documentUrl?.length > 0 ?
                documentUrl.map((item, index) => {
                  return (
                    <View key={index} style={styles.mapFlexContainter}>
                      <View style={styles.mapFlexContainter3}>
                        <Text style={styles.mapFlexContainterText2} numberOfLines={1}>{item?.name || "image" + index}</Text>
                        <TouchableOpacity onPress={() => {
                          handleRemoveDocument(item)
                        }} style={{ margin: 5 }}>
                          <Entypo
                            name="cross"
                            color={colors.black}
                            size={20}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })
                : null
            }

          </View>

          <View style={{ height: 20 }}></View>
          <PrimaryButton
            title={"Create Project"}
            onPress={handleSubmit}
          />
          <View style={{ height: 60 }}></View>

        </View>
      </ScrollView>


    </View>
  )
}

export default Createnewtasks
