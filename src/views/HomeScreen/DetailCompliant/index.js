import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';
import ImageWrapper from "../../../components/ImageWrapper.component";
import WhatsappGreenIcon from "../../../../assets/icons/whatsapp-line.png";
import styled from 'styled-components/native';
import { Linking, Text, View } from 'react-native';
import ButtonPrimary from '../../../components/utils/ButtonPrimary.component';
import { CommonActions } from '@react-navigation/routers';
import LargeInput from '../../../components/utils/LargeInput.component';
import ButtonSecondary from '../../../components/utils/ButtonSecondary.component';
import * as Constants from "../../../constants/Constants";

export default function DetailCompliant({navigation}) {
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 20}}>
                <ButtonSecondary title={"Confusão na praça do derby"} style={{alignSelf: 'left'}}/>
                <Text style={{fontFamily: Constants.fontWeightConfig.Regular, color: "white", fontSize: 16, marginTop: 40, marginBottom: 28}}>Situação: 
                <Text style={{color: Constants.colors.primary[900], fontFamily: Constants.fontWeightConfig.Bold}}> Não concluída</Text></Text>
                <Text style={{fontFamily: Constants.fontWeightConfig.Regular, color: "white", fontSize: 12}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}
