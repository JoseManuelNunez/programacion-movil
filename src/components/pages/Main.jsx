import React from "react";
import { View } from "react-native";
import AppBar from "../Organisms/AppBar.jsx";
import RepositoryList from "../Organisms/RepositoryList.jsx";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
