import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React from 'react'
import Home from '.';
import Menu from './menu';

const Tab = createBottomTabNavigator()

export default function Layout() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: "#3C3C3C",
            borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff'
    }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color }) => {
                return (
                    <FontAwesome
                        name="home"
                        color={color}
                        size={24}
                    />
                );
            },
            tabBarLabelStyle: {
                fontFamily: 'Poppins_400Regular'
            }
        }} />
        <Tab.Screen name="Menu" component={Menu} options={{
            tabBarIcon: ({ color }) => {
                return (
                    <Feather
                        name="menu"
                        color={color}
                        size={24}
                    />
                );
            },
            tabBarLabelStyle: {
                fontFamily: 'Poppins_400Regular'
            }
        }}/>
    </Tab.Navigator>
  )
}
