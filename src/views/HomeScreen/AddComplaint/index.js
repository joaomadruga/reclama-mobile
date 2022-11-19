import { Text, View } from 'react-native';
import ButtonPrimary from '../../../components/utils/ButtonPrimary.component';
import LargeDropdown from '../../../components/utils/LargeDropdown.component';
import LargeInput from '../../../components/utils/LargeInput.component';
import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';

export default function AddComplaint({navigation}) {
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 40}}>
                <LargeDropdown />
                <LargeInput title={"Título da reclamação"}/>
                <LargeInput title={"Endereço do ocorrido"}/>
                <LargeInput title={"Descrição do problema"} flex={1}/>
                <ButtonPrimary title="Enviar" style={{marginBottom: 20, marginTop: 20 }} onPress={() => navigation.navigate("CreatedComplaint")}/>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}