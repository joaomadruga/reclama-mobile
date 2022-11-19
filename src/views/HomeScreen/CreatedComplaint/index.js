import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';
import ImageWrapper from "../../../components/ImageWrapper.component";
import * as Constants from "../../../constants/Constants";
import WhatsappGreenIcon from "../../../../assets/icons/whatsapp-line.png";
import styled from 'styled-components/native';
import { Linking, Text, View } from 'react-native';
import ButtonPrimary from '../../../components/utils/ButtonPrimary.component';
import { CommonActions } from '@react-navigation/routers';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

const WhatsappButton = styled.TouchableOpacity`
    padding: 12px 60px;
    background-color: #3BC04D;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const WhatsappButtonText = styled.Text`
    color: ${Constants.colors.gray[0]};
    font-family: ${Constants.fontWeightConfig.Bold};
    margin-right: 10px;
    flex: 1;
`

export default function CreatedComplaint({navigation, route}) {
    const {code, complaintFormsValue} = route.params;
    const sendWhatsappMensage = () => {
        let whatsAppMsg = `Oi, acabei de criar uma denúncia de ${complaintFormsValue.title} na ${complaintFormsValue.address}. Segue o código caso você queira acompanhar: *${code}*!\n\n\n_OBS: Código gerado pelo app reclama!_`
        let url = 'whatsapp://send?text=' + whatsAppMsg;
        Linking.openURL(url);
    }
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 40, flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 96}}>🥳</Text>
                    <Text style={{color: "white", fontSize: 16, fontFamily: Constants.fontWeightConfig.Regular, marginTop: 20, marginBottom: 20}}>Sua denúncia foi criada com sucesso! Que tal compartilhar agora com outras pessoas que passam por esse mesmo problema?</Text>
                    <WhatsappButton onPress={() => { sendWhatsappMensage() } }>
                        <WhatsappButtonText>Enviar valores pendentes</WhatsappButtonText>
                        <ImageWrapper source={WhatsappGreenIcon} width={'24px'} height={'24px'} />
                    </WhatsappButton>
                </View>
                <ButtonPrimary title={"RETORNAR AO INÍCIO"} textColor={"white"} style={{marginBottom: 20}} onPress={() => {navigation.dispatch(
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
