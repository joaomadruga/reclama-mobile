import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/Constants";

const ButtonPrimaryStyle = styled.TouchableHighlight`
  background-color: ${Constants.colors.primary[900]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

const ButtonText = styled.Text`
  font-family: ${Constants.fontWeightConfig.Bold};
  font-size: 14px;
  color: ${Constants.colors.gray[0]};
`;

export default function ButtonPrimary({ title, textColor, ...props }) {
    return (
        <ButtonPrimaryStyle underlayColor={Constants.colors.primary[600]} {...props}>
            <ButtonText style={{color: textColor}}>{title}</ButtonText>
        </ButtonPrimaryStyle>
    );
}