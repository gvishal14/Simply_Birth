import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CareTeam from '../screens/dashboard/CareTeam';
import Chats from '../screens/dashboard/Chats';
import Home from '../screens/dashboard/Home';
import Learn from '../screens/dashboard/Learn';
import Meet from '../screens/dashboard/Meet';

const Tab = createBottomTabNavigator();

function DashboardNavigator() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="CareTeam" component={CareTeam} />
            <Tab.Screen name="Meet" component={Meet} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Learn" component={Learn} />
        </Tab.Navigator>
    );
}

export default DashboardNavigator;
