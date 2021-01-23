import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>ToDo</Text>
                    </View>
            
                <ScrollView style={styles.scrollContainer}>

                </ScrollView>

                <View style={styles.footer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Task'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                </View>
q           </View>
        );
    }       
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
