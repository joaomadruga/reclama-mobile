import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';
import ImageWrapper from "../../../components/ImageWrapper.component";
import * as Constants from "../../../constants/Constants";
import WhatsappGreenIcon from "../../../../assets/icons/whatsapp-line.png";
import styled from 'styled-components/native';
import { Linking, Text, View } from 'react-native';
import ButtonPrimary from '../../../components/utils/ButtonPrimary.component';
import { CommonActions } from '@react-navigation/routers';
import LargeInput from '../../../components/utils/LargeInput.component';
import { useContext, useState } from 'react';
import { insertCode } from '../../../helper/Compliant/utils';
import * as Store from "../../../store/store";

export default function InsertCode({navigation}) {
    const [code, setCode] = useState({
        code: ""
    });
    const { CPF } = useContext(Store.LoginContext);
    const onSubmit = () => {
        const responseComplaint = (async () => { await insertCode(CPF, code.code)
            .then((response) => {
                console.log(response.data)
                navigation.dispatch(
                    CommonActions.reset({
                    index: 0,
                    routes: [{
                        name: 'Home',
                    }],
                    })
                )
            })
            .catch((error) => {
                console.log(error);
            })})();
    }
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 20, flexDirection: 'column'}}>
                <LargeInput inputState={{ inputText: code, setInputText: setCode, type: "code" }} title={"Inserir o código de uma denúncia coletiva"}/>
                <ButtonPrimary title={"RETORNAR AO INÍCIO"} textColor={"white"} style={{marginTop: 8}} onPress={() => {onSubmit()}}/>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}
