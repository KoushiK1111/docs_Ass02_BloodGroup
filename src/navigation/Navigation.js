import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddDonar from '../screens/AddDonar';
import FindDonar from '../screens/FindDonar';

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarIcon:()=>null,tabBarLabelStyle:{fontSize:22,paddingBottom:10},headerShown:false}}>
                <Tab.Screen 
                    name="AddDonar"
                    component={AddDonar}
                    options={{
                        title:'Add Donar',
                        tabBarActiveTintColor:'black',
                        tabBarActiveBackgroundColor:'lightgreen'
                    }}
                />
                <Tab.Screen 
                    name="FindDonar"
                    component={FindDonar}
                    options={{
                        title:'Find Donar',
                        tabBarActiveTintColor:'black',
                        tabBarActiveBackgroundColor:'lightgreen'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;