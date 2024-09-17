import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Header from '../../component/header/header'
import SearchInput from '../../component/searchinput'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import colors from '../../component/colors'
import Modal from 'react-native-modal';
import PrimaryButton from '../../component/primarybutton'
import Textinput from '../../component/input'
import DobInput from '../../component/dobInput'

const CreateProject = ({ navigation, route }) => {

  const [searchText, setSearchText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState(false)
  const [dob, setDob] = useState('')
  const [dob2, setDob2] = useState('')
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [errors, setErrors] = useState({});

  const projectArray = [{
    id: 1,
    site: 'Site 1',
    date: '8-09-2022',
    supervisior: 'Supervisor 2',
    priority: "High Priority",
    comments: 5,
    percent: '60%',
    active: true,
    days: '8 days'
  },
  {
    id: 2,
    site: 'Commercial Complex',
    date: '09-09-2023',
    supervisior: 'Supervisor 2',
    priority: "Low Priority",
    comments: 5,
    percent: '10%',
    active: false,
    days: '3 days'
  },
  {
    id: 3,
    site: 'Commercial Complex',
    date: '09-09-2023',
    supervisior: 'Supervisor 2',
    priority: "Low Priority",
    comments: 5,
    percent: '100%',
    active: true,
    days: '3 days'
  },
  {
    id: 3,
    site: 'Commercial Complex',
    date: '09-09-2023',
    supervisior: 'Supervisor 2',
    priority: "Low Priority",
    comments: 5,
    percent: '100%',
    active: true,
    days: '3 days'
  },
  ]

  const getDob = dob => {
    setDob(dob);
    // Clear date error when a valid date is selected
    if (dob.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, dob: null }));
    }
  };

  const getDob2 = dob => {
    setDob2(dob);
    // Clear date error when a valid date is selected
    if (dob.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, dob2: null }));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (alertMessage) {
        setAlertMessage(false)
      }
    }, 2000);
  }, [alertMessage])

  // Validation function
  const validateFields = () => {
    let errors = {};
    let isValid = true;

    if (!projectName.trim()) {
      errors.projectName = "Project Name is required *";
      isValid = false;
    }

    if (!projectDescription.trim()) {
      errors.projectDescription = "Project Description is required *";
      isValid = false;
    }

    if (!dob.trim()) {
      errors.dob = "Start Date is required *";
      isValid = false;
    }

    if (!dob2.trim()) {
      errors.dob2 = "Due Date is required *";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title={"Hi John"} />

      <SearchInput
        placeholder={"Search"}
        onChangeText={(e) => {
          setSearchText(e)
        }}
      />
      <View style={styles.HeadingContainer}>
        <Text style={styles.HeadingContainerText}>Latest Projects</Text>
      </View>

      <Modal
        backdropOpacity={0.5}
        onBackdropPress={() => {
          setShowModal(false);
        }}
        animationType={'fade'}
        transparent={true}
        style={styles.fullmodal}
        isVisible={showModal}>
        <View style={styles.modal}>
          <View style={styles.modalGraycontainer}></View>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.HeadingContainerText}>Create New Project</Text>
          </View>
          <Textinput
            style={styles.modalInput}
            placeholder={"Project Name"}
            value={projectName}
            onChangeText={(e) => {
              setProjectName(e)
              if (errors.projectName) {
                setErrors({ ...errors, projectName: "" })
              }
            }}
            error={errors?.projectName ? true : false}
          />
          {errors?.projectName && <Text style={styles.errText}>{errors.projectName}</Text>}

          <Textinput
            style={[styles.modalInput, { marginTop: -15 }]}
            placeholder={"Project Description"}
            value={projectDescription}
            onChangeText={(e) => {
              setProjectDescription(e)
              if (errors.projectDescription) {
                setErrors({ ...errors, projectDescription: "" })
              }
            }}
            error={errors?.projectDescription ? true : false}
          />
          {errors?.projectDescription && <Text style={styles.errText}>{errors.projectDescription}</Text>}

          <Text style={styles.modalSubHeading}>Person In Charge</Text>
          <View style={{ width: '40%' }}>
            <PrimaryButton
              btnStyle={styles.addPrimarycontainer2}
              title={"Add"}
              icon={true}
            />
          </View>
          <Text style={styles.modalSubHeading}>Assigned users</Text>
          <View style={{ width: '40%' }}>
            <PrimaryButton
              btnStyle={styles.addPrimarycontainer2}
              title={"Add"}
              icon={true}
            />
          </View>

          <View style={styles.taskType}>
            <Text style={styles.modalSubHeading}>Choose date</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10, alignSelf: 'center' }}>
              <View style={{ width: '50%' }}>
                <DobInput
                  label={"Start Date"}
                  mydob={getDob}
                  value={dob.length > 0 ? moment(dob, 'DD-MM-YYYY').format('DD.MM.YYYY') : dob}
                  error={errors?.dob ? true : false}
                />
                {errors?.dob && <Text style={styles.errText}>{errors.dob}</Text>}
              </View>

              <View style={{ width: '50%' }}>
                <DobInput
                  label={"Due Date"}
                  mydob={getDob2}
                  value={dob2.length > 0 ? moment(dob2, 'DD-MM-YYYY').format('DD.MM.YYYY') : dob2}
                  error={errors?.dob2 ? true : false}
                />
                {errors?.dob2 && <Text style={styles.errText}>{errors.dob2}</Text>}
              </View>
            </View>
          </View>

          <PrimaryButton
            title={"Create Project"}
            onPress={() => {
              if (validateFields()) {
                setShowModal(false)
                setAlertMessage(true)
              }
            }}
          />
        </View>
      </Modal>

      <FlatList
        data={projectArray}
        renderItem={({ item, index }) => {
          const originalDate = item.date;
          const parsedDate = moment(originalDate, 'DD-MM-YYYY').subtract(1, 'day');

          // Format using Moment.js
          const formattedDate = parsedDate.format('MMM Do[,] YYYY');
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Tasks", {
                  screen: "Taskscreen"
                })
              }}
              style={styles.cardContainer}>
              <View style={styles.flexContainer}>
                <View style={styles.flexSubContainer}>
                  <Ionicons
                    name="calendar-clear-sharp"
                    color={colors.dateText}
                    size={13}
                  />
                  <Text style={styles.dateText}>Created on {formattedDate}</Text>
                </View>
                <View style={styles.flexSubContainer2}>
                  <Text style={item.priority === "High Priority" ? styles.priorityText : styles.LowpriorityText}>{item.priority}</Text>
                  {
                    item.active ?
                      <Text style={styles.activeText}>Active</Text>
                      : null
                  }
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    color={colors.black}
                    size={20}
                  />
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <Image
                  source={require("../../assets/image/building.png")}
                />
              </View>
              <View style={styles.siteContainer}>
                <Text style={styles.siteContainerText}>{item.site}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.percentContainer}>
                  <View style={[styles.compeletePercentContainer, { width: item.percent }]}>
                  </View>
                </View>
                <Text style={styles.percentText}>{item.percent}</Text>
              </View>

              <View style={[styles.flexContainer, { marginTop: 10 }]}>
                <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={styles.dateText}>Person in charge</Text>
                    <Text style={styles.supervisorText}>{item.supervisior}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={require("../../assets/image/user.png")}
                      style={{ width: 20, height: 20 }}
                    />
                    <Image
                      source={require("../../assets/image/user2.png")}
                      style={{ width: 20, height: 20, right: 8 }}
                    />
                    <Image
                      source={require("../../assets/image/user3.png")}
                      style={{ width: 20, height: 20, right: 15 }}
                    />
                  </View>

                </View>
                <View style={{ width: '32%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Route", {
                          screen: "Comment"
                        })
                      }}
                    >
                      <FontAwesome
                        name="commenting-o"
                        color={colors.dateText}
                        size={18}
                      />
                    </TouchableOpacity>
                    <Text style={[styles.dateText, { left: 5 }]}>{item.comments}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                      name="clock-time-four-outline"
                      color={colors.dateText}
                      size={18}
                    />
                    <Text style={[styles.dateText, { left: 5 }]}>{item.days}</Text>
                  </View>
                </View>
              </View>

            </TouchableOpacity>
          )
        }}
      />

      <View style={styles.bottomButton}>
        <PrimaryButton
          btnStyle={styles.addPrimarycontainer}
          icon={true}
          onPress={() => {
            setShowModal(true)
          }}
        />
      </View>
      <View style={{ height: 30 }}></View>
    </View>
  )
}
export default CreateProject