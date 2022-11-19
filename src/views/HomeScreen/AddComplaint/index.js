import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ButtonPrimary from '../../../components/utils/ButtonPrimary.component';
import LargeDropdown from '../../../components/utils/LargeDropdown.component';
import LargeInput from '../../../components/utils/LargeInput.component';
import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';
import { addComplaint } from '../../../helper/Compliant/utils';
import * as Store from "../../../store/store";

export default function AddComplaint({navigation}) {
    const { CPF } = useContext(Store.LoginContext);
    const [complaintFormsValue, setComplaintFormsValue] = useState({
        type: "",
        title: "",
        address: "",
        description: ""
    });

    const onSubmit = () => {
        const {title, address, description, type} = complaintFormsValue;
        const responseComplaint = (async () => { await addComplaint(CPF, title, description, type, address)
            .then((response) => {
                const code = response.data.message.codigo;
                navigation.navigate("CreatedComplaint", {complaintFormsValue, code});
            })
            .catch((error) => {
                console.log(error);
            })})();
    }
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 40}}>
                <LargeDropdown inputState={{ inputText: complaintFormsValue.type, setInputText: setComplaintFormsValue }} />
                <LargeInput inputState={{ inputText: complaintFormsValue.title, setInputText: setComplaintFormsValue, type: "title" }} title={"Título da reclamação"}/>
                <LargeInput inputState={{ inputText: complaintFormsValue.address, setInputText: setComplaintFormsValue, type: "address" }} title={"Endereço do ocorrido"}/>
                <LargeInput inputState={{ inputText: complaintFormsValue.description, setInputText: setComplaintFormsValue, type: "description" }}title={"Descrição do problema"} flex={1}/>
                <ButtonPrimary title="Enviar" style={{marginBottom: 20, marginTop: 20 }} onPress={() => onSubmit()}/>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}