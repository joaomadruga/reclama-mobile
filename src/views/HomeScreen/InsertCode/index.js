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

export default function InsertCode({navigation}) {
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 20, flexDirection: 'column'}}>
                <LargeInput title={"Inserir o código de uma denúncia coletiva"}/>
                <ButtonPrimary title={"RETORNAR AO INÍCIO"} textColor={"white"} style={{marginTop: 8}} onPress={() => {navigation.dispatch(
                    CommonActions.reset({
                    index: 0,
                    routes: [{
                        name: 'Home',
                    }],
                    })
                )}}/>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}
