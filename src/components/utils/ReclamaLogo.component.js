import { Text } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";

const RecText = styled.Text`
    font-family: ${Constants.fontWeightConfig.Bold};
    font-size: 30px;
    color: ${Constants.colors.gray[0]};
`

const LamaText = styled.Text`
    font-family: ${Constants.fontWeightConfig.Regular};
    font-size: 30px;
    color: ${Constants.colors.primary[900]};
`


export default function ReclamaLogo() {
    return (
        <RecText>
            rec
            <LamaText>
                lama
            </LamaText>
        </RecText>
    )
}