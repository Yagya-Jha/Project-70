import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';

export default class WriteScreen extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return (
        <View style={styles.container}>
          <View>
         <Text style = {{textAlign:"center",marginTop:-75, alignSelf:"center", fontSize:50, fontWeight:"bold",width:400, backgroundColor:"pink"}}>Story Hub</Text>
        </View>
        <View>
          <View style = {styles.inputView}>
            <TextInput style = {styles.inputBox} placeholder = "Story Tittle" multiline = {false}></TextInput>
          </View>
          <View style = {styles.inputView}>
            <TextInput style = {styles.inputBox} placeholder = "Author" multiline = {false}></TextInput>
          </View>
          <KeyboardAvoidingView style = {styles.inputBox} style = {styles.inputView}>
            <TextInput style = {styles.storyinputBox} placeholder = "Write your story here" multiline = {true}></TextInput>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity 
    style = {styles.submit}>
      <Text style = {{marginTop: 10}}>
        Submit
      </Text>
    </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 8,
    alignItems: "center"
  },
  inputView: {
    flexDirection: "row",
    margin:20,
  },
  inputBox: {
    width:"100%",
    height: 40,
    borderWidth:4,
    fontSize: 25,
  },
  storyinputBox: {
    width:"100%",
    height: 350,
    borderWidth:4,
    fontSize: 25,
  },
  submit: {
    borderRadius: 10,
    width:100,
    height:55,
    alignSelf:"center",
    alignItems:"center",
    backgroundColor:"pink",
  }
});
