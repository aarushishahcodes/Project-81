import React from 'react';
import {CreateBottomTabNavigator} component from react navigation/bottom-tabs;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if {route.name === 'Feed'} {
                        iconName = focused
                            ? 'book'
                            : 'book.outline';
                            }
                            else if (route.name === 'CreatePost') {
                                iconName = focused ? 'create' : 'create-outline';
                            }
                            return <Ionicons name = {iconNmae} size={size} color={color}/>;
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTinitColor: 'gray',
            }}
        >

        <Tab.Screen name = "Feed"  component {Feed} />
        <Tab.Screen name = "CreatePOst"  component {CreatePost} />
        <Tab.Navigator>
    )
}