import React, { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";


export default function TestPage() {
  // Show or Hide the purple box
  const [isShown, setIsShown] = useState(false);

  // This function will be triggered when the Switch changes
  const toggleTheBox = () => {
    setIsShown((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#4caf50", width: 200}}
        thumbColor={isShown ? "#8bc34a" : "#ddd"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheBox}
        value={isShown}
        style={styles.swish}
      />

      {isShown === true ? <View style={styles.box}></View> : null}
    </View>
  );
}

