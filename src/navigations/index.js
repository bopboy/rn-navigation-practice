import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Stack';
import TabNav from './Tab';

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabNav />
        </NavigationContainer>
    );
}
