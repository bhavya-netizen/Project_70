import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            story: '',
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <Header
                   backgroundColor = {'pink'}
                   centerComponent = {{
                       text: 'Story Hub',
                       style: {color: 'white', fontSize: 20, fontFamily: 'cursive'}
                   }}
                />
                <TextInput
                   placeholder = "Story Title"
                   onChangeText = {(text) => {
                       this.setState({title: text})
                   }}
                   value = {this.state.title}
                   style = {styles.title}
                   placeholderTextColor='black'
                />

                <TextInput
                   placeholder = "Author"
                   onChangeText = {(text) => {
                       this.setState({author: text})
                   }}
                   value = {this.state.author}
                   style = {styles.author}
                   placeholderTextColor='black'
                />

                <TextInput
                   placeholder = "Write your story"
                   onChangeText = {(text) => {
                       this.setState({story: text})
                   }}
                   value = {this.state.story}
                   style = {styles.storyy}
                   multiline = {true}
                />

                <TouchableOpacity style = {styles.submit}>
                    <Text style = {styles.submitText}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        height: 40,
        borderWidth: 2,
        margin: 10,
        marginTop: 35,
        color: 'black',
        padding: 6,
    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    storyy: {
        height: 250,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    submit: {
        justifyContent: 'center',
        width: 75,
        height: 35,
        backgroundColor: 'pink',
        alignSelf: 'center',
        color: 'black',
    },
    submitText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color: 'black',
    },
});