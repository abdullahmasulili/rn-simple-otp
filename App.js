import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { navigationRef } from "~helpers/RootNavigations";

import MainStack from "~routes";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
      <Toast />
    </NavigationContainer>
  );
}
