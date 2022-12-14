import LoginScreen from "../../views/LoginScreen";
import * as Constants from "../../constants/Constants";
import { Text, TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../../components/ImageWrapper.component";
import Logo from "../../../assets/icons/logo.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReclamaLogo from "../../components/utils/ReclamaLogo.component";
import ArrowLeft from "../../../assets/icons/arrow-left.png";
import HomeScreen from "../../views/HomeScreen";
import AddComplaint from "../../views/HomeScreen/AddComplaint";
import CreatedComplaint from "../../views/HomeScreen/CreatedComplaint";
import InsertCode from "../../views/HomeScreen/InsertCode";
import DetailCompliant from "../../views/HomeScreen/DetailCompliant";
import UrgentCompliant from "../../views/LoginScreen/UrgentCompliant";
import { useEffect, useState } from "react";
import * as Store from "../../store/store";

const Stack = createNativeStackNavigator();

export default function HomeRoutes() {
    const [CPF, setCPF] = useState('');
  
    return (
      <Store.LoginContext.Provider value={{CPF, setCPF}}>
          <Stack.Navigator initialRouteName={"Login"} screenOptions={screenOptions} >
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={() => ({
                  headerShown: false
                })}
              />

              <Stack.Screen
                name="UrgentCompliant"
                component={UrgentCompliant}
                options={({ navigation }) => ({
                  headerTitle: 'Contatos de apoio',
                  title: 'Contatos de apoio',
                  headerLeft: () =>  ( 
                  <TouchableWithoutFeedback onPress={navigation.goBack}>
                    <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                  </TouchableWithoutFeedback>
                  )
                })}
              />

              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={() => ({
                  headerShown: false
                })}
              />

              <Stack.Screen
                name="AddComplaint"
                component={AddComplaint}
                options={({ navigation }) => ({
                  headerTitle: 'Criar den??ncia',
                  title: 'Criar den??ncia',
                  headerLeft: () =>  ( 
                  <TouchableWithoutFeedback onPress={navigation.goBack}>
                    <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                  </TouchableWithoutFeedback>
                  )
                })}
              />

              <Stack.Screen
                name="CreatedComplaint"
                component={CreatedComplaint}
                options={({ navigation }) => ({
                  headerTitle: 'Den??ncia criada com sucesso!',
                  title: 'Den??ncia criada com sucesso!',
                  headerLeft: () => (
                    <></>
                  )
                })}
                />
              <Stack.Screen
                name="InsertCode"
                component={InsertCode}
                options={({ navigation }) => ({
                  headerTitle: 'Inserir c??digo',
                  title: 'Inserir c??digo',
                  headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                      <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                  )
                })}
              />
              <Stack.Screen
                name="DetailCompliant"
                component={DetailCompliant}
                options={({ navigation }) => ({
                  headerTitle: 'Den??ncias encerradas',
                  title: 'Den??ncias encerradas',
                  headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                      <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                  )
                })}
                
              />
          </Stack.Navigator>
          </Store.LoginContext.Provider>
    );
  }
  
  const screenOptions = {
    headerTintColor: 'white',
    headerBackTitleVisible: false,
    headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
    headerStyle: {
        backgroundColor: Constants.backgroundConfig.BackgroundColor
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    gestureEnabled: true,
    gestureDirection: "horizontal",
    animation: "slide_from_right",
    backgroundColor: Constants.backgroundConfig.BackgroundColor
  }