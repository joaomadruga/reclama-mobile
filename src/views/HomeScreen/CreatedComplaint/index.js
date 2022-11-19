import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';
import ImageWrapper from "../../../components/ImageWrapper.component";
import * as Constants from "../../../constants/Constants";
import WhatsappGreenIcon from "../../../../assets/icons/whatsapp-line.png";
import styled from 'styled-components/native';
import { Linking, Text, View } from 'react-native';
import ButtonPrimary from '../../../components/utils/ButtonPrimary.component';
import { CommonActions } from '@react-navigation/routers';

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

export default function CreatedComplaint({navigation}) {
    const sendWhatsappMensage = () => {
        let whatsAppMsg = `Oi, passando pra te lembrar da carona! Ficou um valor de em aberto. Valeu!\n\n\n_OBS: valores calculados automaticamente pelo app Carplit!_`
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
