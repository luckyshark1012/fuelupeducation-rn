import React, { useState } from "react";
import { View, Picker, StyleSheet,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DropDownCourse = () => {
  const [selectedValue, setSelectedValue] = useState("--Select--");
  return (
    <View style={styles.container}>
      
      <Picker
       mode='dropdown'
        selectedValue={selectedValue}
        style={{ height: 50, width: width}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="--Select--" value="--Select--" />
        <Picker.Item label="BCA" value="BCA" />
        <Picker.Item label="BBA" value="BBA" />
        <Picker.Item label="B Com." value="B Com." />
        <Picker.Item label="MCA" value="MCA" />
        <Picker.Item label="BSCIT" value="BSCIT" />
        <Picker.Item label="MSCIT" value="MSCIT" />
        <Picker.Item label="BA" value="BA" />
        <Picker.Item label="MA" value="MA" />
        <Picker.Item label="M Com." value="M Com." />
      
       
      </Picker>
    
    </View>
  );
}
const width = Dimensions.get('window').width -205;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    top:10,
    height:40,
    width:150,
    backgroundColor:'rgba(209, 214, 255, 0.5)',
    borderRadius:10,
   bottom:20,
  
    justifyContent:'center',
   alignContent:'center'
  }
});

export default DropDownCourse;