import React from 'react';
import {View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Image,} from "react-native"
import {createStackNavigator} from "@react-navigation/stack"
import { Video } from 'expo-av';
import Camella from "./videocamella.mp4"

const Stack = createStackNavigator()
const VideoM = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Videoxd" component={Movie}
            options={{ 
            //   headerTitle: props => <LogoTitle main={true} {...props} />,
              // headerShown: false,
            //   headerLeft: null,
              headerTintColor: '#ffffff',
              headerStyle: {backgroundColor:"red"}}}/>
        </Stack.Navigator>
    )
}
const Movie = () => {

    return(
        <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'center'}}>
                <Video
                source={Camella}
                // source={{uri:"https://www.youtube.com/watch?v=RqqYRon0sjE&list=RDMM7h2ryr_uUEs&index=22"}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                // shouldPlay
                shouldCorrectPitch
                useNativeControls
                style={{ width: "100%", height: 300, alignSelf: 'center' }}
                /> 
           </View>
    )
}

export default VideoM