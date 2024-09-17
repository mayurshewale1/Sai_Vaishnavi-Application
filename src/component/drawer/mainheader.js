import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles';
import colors from '../constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from './drawer';

const MainHeader = (props) => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1); // Store the active tab in the parent

  // Handle tab selection
  const getTab = (tabId, tabName) => {
    setShow(false); // Close the modal
    setActiveTab(tabId); // Set the active tab in the parent
    // props.setTab(tabId, tabName); // If you want to handle further logic
  };

  return (
    <View>
      {/* Drawer Modal */}
      <Modal
        isVisible={show}
        backdropOpacity={0.1}
        onBackdropPress={() => setShow(false)}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={{ width: '100%', margin: 0 }}
      >
        <View style={styles.modal}>
          <Drawer
            func={getTab}
            activeTab={activeTab}  // Pass activeTab as a prop
            onClose={() => setShow(false)}
          />
        </View>
      </Modal>

      {/* Header View */}
      <View style={styles.headerContainer}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Ionicons
            name="menu"
            color={colors.white}
            size={30}
          />
        </TouchableOpacity>

        {/* Notification and Profile Icons */}
        <View style={styles.headerContainer2}>
          <TouchableOpacity>
            <Ionicons
              name="search"
              color={colors.white}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              color={colors.white}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              width={25}
              height={25}
              source={require('../assets/images/profile.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainHeader;
