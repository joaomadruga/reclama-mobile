import styled from 'styled-components/native';
import * as Constants from "../../constants/Constants";
import LoadingIcon from "../../../assets/icons/LoadingIcon.png";
import ClockIcon from "../../../assets/icons/clock-icon.png";
import DoneIcon from "../../../assets/icons/DoneIcon.png";
import ImageWrapper from '../ImageWrapper.component';
import { View } from 'react-native';

const WidgetIssueStyle = styled.TouchableOpacity`
    width: 100%;
    border-left-color: ${Constants.colors.primary[600]};
    border-left-width: 10px;
    border-left-style: solid;
    border-radius: 5px;
    padding: 18px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${Constants.colors.gray[700]};
    margin-bottom: 20px;
`

const Title = styled.Text`
    font-family: ${Constants.fontWeightConfig.Bold};
    font-size: 18px;
    color: ${Constants.colors.gray[400]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontWeightConfig.Regular};
    font-size: 14px;
    color: ${Constants.colors.gray[600]};
`

export function WidgetIssue({navigation, item, title, subtitle, status}){
    return (
        <WidgetIssueStyle onPress={() => navigation.navigate("DetailCompliant", {item})}>
            <>
                <View>
                    <Title>{title}</Title>
                    <Subtitle>
                    <ImageWrapper source={ClockIcon} width={'18px'} height={'18px'} style={{marginTop: -1}}/>  {subtitle}</Subtitle>
                </View>
                <ImageWrapper source={status === 0 ? LoadingIcon : DoneIcon} style={{cursor: 'pointer'}} width={'48px'} height={'48px'}/>
            </>
        </WidgetIssueStyle>
    )
};