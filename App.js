import React from 'react';
import { Text,  StyleSheet,TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const userInfo=
  {username:"admin",password:"12345"} 
;
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={username:'',password:''}
  }
render(){
  return(
        <View style={styles.container}>
            <Text style={styles.welcome} >Login to App</Text>
            <TextInput style={styles.input} placeholder="Username" 
            onChangeText={(username)=>this.setState({username})} 
            value={this.state.username}/>
            <TextInput style={styles.input} placeholder="Password" 
            onChangeText={(password)=>this.setState({password})} 
            value={this.state.password} 
            secureTextEntry={true}/>
            <TouchableOpacity style={styles.enterbtn} onPress={this._signIn}>
             <Text style={styles.enterbtntext}>Login</Text>
            </TouchableOpacity>
        </View>
  );
}
_signIn= async()=> {
  if(userInfo.username === this.state.username && userInfo.password === this.state.password){
    alert("Logged In");
  }
  else
    alert("Incorrect Credentials")
  
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcome:{
    fontSize: 20,
    textAlign:"center",
    margin:100
  },
  input:{
    margin:30,
    height:40,
    padding:5,
    fontSize:16,
    borderBottomWidth:1,
    borderBottomColor:"#428AF8"

  },
  enterbtn:{
    justifyContent:"center",
    flexDirection:"row",
    backgroundColor:"#428AF8",
    marginLeft:15,
    marginRight:15,
    padding:10
  },
  enterbtntext:{
    color:'#ffffff',
    fontWeight:'700'
  }
}
);

