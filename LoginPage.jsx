import React from 'react';
import { Text,  StyleSheet,TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const userInfo={username:'',password=''}
export default  class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={username:'',password:''}
  }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome} >Login to App</Text>
            <TextInput style={styles.input} placeholder='username'/>
            <TextInput style={styles.input} placeholder='password'/>
            <TouchableOpacity>
              
            </TouchableOpacity>

        </View>
        );
    }

    signIn=async()=>{
      // Code For Validation
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    welcome:{
      fontSize: 20,
      textAlign:"center",
      margin:50
    },
    input:{
      margin:55,
      height:40,
      padding:5,
      fontSize:16,
      borderBottomWidth:1,
      borderBottomColor:"#428AF8"
  
    }
}
);
