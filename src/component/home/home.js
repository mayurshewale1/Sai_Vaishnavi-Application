import React from 'react';
import { View } from 'react-native';
import MainHeader from '../drawer/mainheader';
import { useTab } from '../context/tabcontext';
import ProjectList from '../project/projectlist';
import TasksList from '../tasks/taskslist';
import Reportlist from '../report/report';
import CalendarScreen from '../calendar/calendar';
import UserList from '../user/users';
import PaymentList from '../payment/paymentlist';
import Resourcemgmt from '../resourcemgmt/resourcemgmt';

const Home = ({ navigation }) => {
  const { activeTab } = useTab(); // Get activeTab from the context

  return (
    <View style={{ flex: 1 }}>
      <MainHeader navigation={navigation} />
      {activeTab === 1 && <ProjectList navigation={navigation} />}
      {activeTab === 2 && <TasksList navigation={navigation} />}
      {activeTab === 3 && <PaymentList navigation={navigation} />}
      {activeTab === 4 && <Resourcemgmt navigation={navigation} />}
      {activeTab === 5 && <UserList navigation={navigation} />}
      {activeTab === 6 && <CalendarScreen navigation={navigation} />}
      {activeTab === 7 && <Reportlist navigation={navigation} />}
    </View>
  );
};

export default Home;
