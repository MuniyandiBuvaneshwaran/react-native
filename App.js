import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome } from "./screens"; // Assuming these are defined correctly
import Userdetails from "./component/Userdetails";
import AppNavigation from "./navigation/AppNavigation";
import StudentForm from "./component/StudentDetails";
import StudentList from "./component/StudentList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Userdetails"
          component={Userdetails}
          options={{ headerShown: false }}
        />
        {/* Ensure that AppNavigation is correctly defined and exported */}
        <Stack.Screen name="Home" component={AppNavigation} />
        <Stack.Screen name="StudentForm" component={StudentForm} />
        <Stack.Screen name="StudentList" component={StudentList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
