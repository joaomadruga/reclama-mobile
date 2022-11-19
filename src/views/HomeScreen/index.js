import { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import { ButtonSwitch } from '../../components/home/ButtonSwitch.component';
import ButtonPrimary from '../../components/utils/ButtonPrimary.component';
import ButtonSecondary from '../../components/utils/ButtonSecondary.component';
import ReclamaLogo from '../../components/utils/ReclamaLogo.component';
import SafeAreaViewDefault from '../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../components/utils/ViewWithPadding.component';
import { WidgetIssue } from '../../components/utils/WidgetIssue.component';
import * as Constants from "../../constants/Constants";
import { FAB, TextInput } from 'react-native-paper';
import { getComplaint } from '../../helper/Compliant/utils';
import * as Store from "../../store/store";

export default function HomeScreen({ navigation }) {
    const [isLeftSelected, setIsLeftSelected] = useState(true);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [activeComplains, setActiveComplains] = useState(undefined);
    const [filteredActiveComplains, setFilteredActiveComplains] = useState([]);
    const [finishedComplains, setFinishedComplains] = useState(undefined);
    const [filteredFinishedComplains, setFilteredFinishedComplains] = useState([]);

    const { CPF } = useContext(Store.LoginContext);
    useEffect(() => {
        const responseComplaint = (async () => { await getComplaint(CPF)
            .then((response) => {
                
                const activeComplainsArray = [];
                const finishedComplainsArray = [];
                const filteredComplaint = response.data.message.filter((value) => {
                    if (value.status === 1) {
                        finishedComplainsArray.push(value);
                    } else {
                        activeComplainsArray.push(value);
                    }
                })
                console.log('////')
                console.log(activeComplainsArray)
                console.log('////')
                console.log(finishedComplainsArray)
                setFinishedComplains(finishedComplainsArray);
                setFilteredFinishedComplains(finishedComplainsArray);
                setActiveComplains(activeComplainsArray);
                setFilteredActiveComplains(activeComplainsArray);
            })
            .catch((error) => {
                console.log(error);
            })})();
    }, []);


function searchFilter(text) {
    const currentData = isLeftSelected ? activeComplains : finishedComplains;
    const currentFilteredData = isLeftSelected ? setFilteredActiveComplains : setFilteredFinishedComplains;
    if (text) {
      const newData = currentData.filter((item) => {
        const itemData = item.id_denuncia.titulo
          ? item.id_denuncia.titulo.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      currentFilteredData(newData);
      setSearchInputValue(text);
    } else {
        currentFilteredData(currentData);
        setSearchInputValue(text);
    }
  }
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, alignItems: 'center', marginBottom: 20}}>
                    <ReclamaLogo/>
                    <Text style={{color: "white", fontFamily: Constants.fontWeightConfig.Regular}} onPress={() => navigation.navigate("InsertCode")}>INSERIR CÓDIGO</Text>
                </View>
                <ButtonSwitch style={{marginBottom: 20}} isLeftSelectedState={{isLeftSelected, setIsLeftSelected}} />
                <TextInput
                        label="Digite uma denúncia"
                        style={{backgroundColor: "transparent", color: "white", marginBottom: 20}}
                        underlineColor={Constants.colors.primary[600]}
                        placeholderTextColor={Constants.colors.primary[600]}
                        selectionColor={Constants.colors.primary[600]}
                        activeUnderlineColor={Constants.colors.primary[600]}
                        textColor={"white"}
                        value={searchInputValue}
                        onChangeText={text => searchFilter(text)}
                        right={<TextInput.Icon icon="magnify" />}
                    />
                <FlatList
                    style={{marginBottom: 60}}
                    data={isLeftSelected ? filteredActiveComplains : filteredFinishedComplains}
                    renderItem={({ item, index }) => (
                        <WidgetIssue item={item.id_denuncia} navigation={navigation} title={item.id_denuncia.titulo} subtitle={item.id_denuncia.data_denuncia} status={item.id_denuncia.status} />
                    )}
                    />
                <FAB
                    icon="plus"
                    style={{position: 'absolute', right: 20, bottom: 20, backgroundColor: Constants.colors.primary[900]}}
                    onPress={() => navigation.navigate('AddComplaint')}
                />
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}