import React from 'react';
import { Text,  StyleSheet, View } from 'react-native';

export default class App extends React.Component{
render(){
  return(
    <View style={styles.container}>

      <Text style={styles.textstyle}>Hello Mojahid!!!!</Text>
      
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textstyle:{
     alignItems:"center",
     textAlign:"center",
     marginTop:"20%",
     fontWeight:'700'
  },
});
