import { Linking, Text, View } from 'react-native';
import HelpContactsWidget from '../../../components/utils/HelpContactsWidget.component';
import SafeAreaViewDefault from '../../../components/utils/SafeAreaViewDefault.component';
import ViewWithPadding from '../../../components/utils/ViewWithPadding.component';
import * as Constants from "../../../constants/Constants";

export default function UrgentCompliant({navigation}) {
    return (
        <SafeAreaViewDefault>
            <ViewWithPadding style={{marginTop: 20, flexDirection: 'column'}}>
                <Text style={{color: Constants.colors.primary[600], fontFamily: Constants.fontWeightConfig.Bold, fontSize: 16}}>Para emergências, ligue:</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20}}>
                    <HelpContactsWidget title={"100"} subtitle={"Injúria ou difamação"} onPress={() => Linking.openURL(`tel:100`)} />
                    <HelpContactsWidget title={"125"} subtitle={"Conselho tutelar"} onPress={() => Linking.openURL(`tel:125`)}/>
                    <HelpContactsWidget title={"199"} subtitle={"Defesa civil"} onPress={() => Linking.openURL(`tel:199`)}/>
                    <HelpContactsWidget title={"193"} subtitle={"Bombeiros"} onPress={() => Linking.openURL(`tel:193`)}/>
                    <HelpContactsWidget title={"180"} subtitle={"Violência ou abuso contra a mulher"} onPress={() => Linking.openURL(`tel:180`)}/>
                    <HelpContactsWidget title={"192"} subtitle={"SAMU"} onPress={() => Linking.openURL(`tel:192`)}/>
                    <HelpContactsWidget title={"190"} subtitle={"Polícia"} onPress={() => Linking.openURL(`tel:190`)}/>
                </View>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}
