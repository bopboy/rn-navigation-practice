import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Mail, Profile, Settings } from "../screens"
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const TabBarIcon = ({ name, size, color }) => {
    return <MaterialIcons name={name} size={size} color={color} />
}
const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                showLabel: true,
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    backgroundColor: '#444444',
                    borderTopColor: '#0000ff',
                    borderTopWidth: 3
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#111111'
            }}
        >
            <Tab.Screen
                name="Mail" component={Mail}
                options={{
                    tabBarIcon: props => {
                        return TabBarIcon({ ...props, name: props.focused ? 'mail' : 'mail-outline' })
                    },
                    tabBarLabel: 'Inbox'
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: props => {
                        return TabBarIcon({ ...props, name: props.focused ? 'person' : 'person-outline' })
                    }
                }}
            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarIcon: props => {
                        return TabBarIcon({ ...props, name: props.focused ? 'settings' : 'settings-applications' })
                    }
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNav