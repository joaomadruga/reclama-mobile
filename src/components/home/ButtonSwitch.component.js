import styled from 'styled-components/native';
import * as Constants from "../../constants/Constants";


const SwitchButtonStyle = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Button = styled.TouchableOpacity`
    border-color: ${props => props.isSelected ? Constants.colors.gray[900] : Constants.colors.primary[900]};
    background-color: ${props => props.isSelected ? Constants.colors.primary[900] : Constants.colors.gray[700]};
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    padding: 8px 0;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.Text`
    color: ${props => props.isSelected ? Constants.colors.gray[800] : Constants.colors.primary[900]};
    font-size: 12px;
    font-family: ${Constants.fontWeightConfig.Regular};
`

export function ButtonSwitch({ isLeftSelectedState, ...props }){
    const {isLeftSelected, setIsLeftSelected} = isLeftSelectedState;
    const invertIsSelected = (isButtonSelected) => { if (!isButtonSelected) setIsLeftSelected(!isLeftSelected) };

    return (
        <SwitchButtonStyle {...props}>
            <Button
            onPress={() => invertIsSelected(isLeftSelected)}
            isSelected={isLeftSelected}
            isLeft={true}
            style={{marginRight: 11}}
            underlayColor={isLeftSelected ? Constants.colors.primary[900] : Constants.colors.gray[800]}
            >
                <ButtonText isSelected={isLeftSelected}>DENÚNCIAS ATIVAS</ButtonText>
            </Button>
            <Button 
            onPress={() => invertIsSelected(!isLeftSelected)} 
            isSelected={!isLeftSelected}
            isLeft={false}
            underlayColor={isLeftSelected ? Constants.colors.primary[900] : Constants.colors.gray[800]}
            >
                <ButtonText isSelected={!isLeftSelected}>DENÚNCIAS ENCERRADAS</ButtonText>
            </Button>
        </SwitchButtonStyle>
    )
};