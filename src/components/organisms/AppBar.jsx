import React from "react";
import { View } from "react-native";
import StyledText from "../Atoms/StyledText.jsx";
import { appBarStyles } from "../Atoms/Styles.js";

const AppBar = () => {
  return (
    <View
      style={[
        appBarStyles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <StyledText
        fontWeight="bold"
        style={[
          appBarStyles.text,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        Repositories
      </StyledText>
    </View>
  );
};

export default AppBar;
