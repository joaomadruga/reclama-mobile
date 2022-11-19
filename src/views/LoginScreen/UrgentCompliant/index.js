import { Text, View } from 'react-native';
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
                    <HelpContactsWidget title={"100"} subtitle={"Injúria ou difamação"} />
                    <HelpContactsWidget title={"125"} subtitle={"Conselho tutelar"} />
                    <HelpContactsWidget title={"199"} subtitle={"Defesa civil"} />
                    <HelpContactsWidget title={"193"} subtitle={"Bombeiros"} />
                    <HelpContactsWidget title={"180"} subtitle={"Violência ou abuso contra a mulher"} />
                    <HelpContactsWidget title={"192"} subtitle={"SAMU"} />
                    <HelpContactsWidget title={"190"} subtitle={"Polícia"} />
                </View>
            </ViewWithPadding>
        </SafeAreaViewDefault>
    )
}
