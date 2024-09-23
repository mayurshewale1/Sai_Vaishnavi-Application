import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from './drawer';
import { useTab } from '../context/tabcontext';
import colors from '../constant/colors';

const MainHeader = ({ navigation, tab }) => {
  const { activeTab, setActiveTab } = useTab(); // Use the context

  const [show, setShow] = useState(false);

  // Handle tab selection
  const getTab = (tabId, tabName) => {
    setShow(false); // Close the modal
    setActiveTab(tabId); // Set the active tab using the context
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
            activeTab={activeTab}  // Pass activeTab as a prop from context
            onClose={() => setShow(false)}
            navigation={navigation}
          />
        </View>
      </Modal>

      {/* Header View */}
      <View style={styles.headerContainer}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Ionicons name="menu" size={30} color={colors.white} />
        </TouchableOpacity>

        {/* Other Icons */}
        <View style={styles.headerContainer2}>
          <TouchableOpacity>
            <Ionicons name="search" size={20} color={colors.white}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={20} color={colors.white}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/profile.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainHeader;
