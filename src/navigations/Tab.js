import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Mail, Profile, Settings } from "../screens"

const Tab = createBottomTabNavigator()

const TabNav = () => {
    return (
        <Tab.Navigator initialRouteName="Profile">
            <Tab.Screen name="Mail" component={Mail} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
export default TabNav