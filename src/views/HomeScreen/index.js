import { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonSwitch } from '../../components/home/ButtonSwitch.component';
import ButtonPrimary from '../../components/utils/ButtonPrimary.component';
import ButtonSecondary from '../../components/utils/ButtonSecondary.component';
import ReclamaLogo from '../../components/utils/ReclamaLogo.component';
import SafeAreaViewDefault from '../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../components/utils/ViewWithPadding.component';
import { WidgetIssue } from '../../components/utils/WidgetIssue.component';
import * as Constants from "../../constants/Constants";
import { FAB } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    const [isLeftSelected, setIsLeftSelected] = useState(true);
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center', marginBottom: 20}}>
                    <ReclamaLogo/>
                    <Text style={{color: "white", fontFamily: Constants.fontWeightConfig.Regular}} onPress={() => navigation.navigate("InsertCode")}>INSERIR CÓDIGO</Text>
                </View>
                <ButtonSwitch style={{marginBottom: 20}} isLeftSelectedState={{isLeftSelected, setIsLeftSelected}} />
                <WidgetIssue navigation={navigation} />
                <WidgetIssue navigation={navigation} />
                <WidgetIssue navigation={navigation} />
                <FAB
                    icon="plus"
                    style={{position: 'absolute', right: 20, bottom: 20, backgroundColor: Constants.colors.primary[900]}}
                    onPress={() => navigation.navigate('AddComplaint')}
                />
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}