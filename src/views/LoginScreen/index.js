import { CommonActions } from '@react-navigation/routers';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import ButtonPrimary from '../../components/utils/ButtonPrimary.component';
import ButtonSecondary from '../../components/utils/ButtonSecondary.component';
import CenteredViewWithPadding from '../../components/utils/CenteredViewWithPadding.component';
import ReclamaLogo from '../../components/utils/ReclamaLogo.component';
import SafeAreaViewDefault from '../../components/utils/SafeAreaViewDefault.component';
import * as Constants from "../../constants/Constants";

export default function LoginScreen({navigation}) {
    const [CPF, setCPF] = useState('');

    const onSubmit = async () => {
        const isEmailValid = () => { return /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(CPF) };
        if (CPF && isEmailValid()) {
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{
                    name: 'Home',
                  }],
                })
              );
      }
    }
    return (
        <SafeAreaViewDefault>
            <CenteredViewWithPadding> 
                <View style={{position: 'absolute', top: 10, alignSelf: 'center'}}>
                        <ReclamaLogo/>
                </View>
                <View>
                    <TextInput
                        label="Insira seu CPF"
                        style={{backgroundColor: "transparent", color: "white", marginBottom: 20}}
                        underlineColor={Constants.colors.primary[600]}
                        placeholderTextColor={Constants.colors.primary[600]}
                        selectionColor={Constants.colors.primary[600]}
                        activeUnderlineColor={Constants.colors.primary[600]}
                        textColor={"white"}
                        value={CPF}
                        onChangeText={text => setCPF(text)}
                    />
                    <ButtonPrimary onPress={() => {onSubmit()}} title={"ENTRAR"}/>
                </View>
                <ButtonSecondary title={"DENÚNCIA URGENTE"} style={{position: "absolute", bottom: 10, alignSelf: 'center', width: '100%'}} onPress={() => navigation.navigate("UrgentCompliant")}/>
            </CenteredViewWithPadding>
        </SafeAreaViewDefault>
    )
}