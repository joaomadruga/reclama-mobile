import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/Constants";

const ButtonSecondaryStyle = styled.TouchableHighlight`
  background-color: ${Constants.colors.gray[700]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 12px;
  border: solid 1px ${Constants.colors.primary[900]};
`;

const ButtonText = styled.Text`
  font-family: ${Constants.fontWeightConfig.Bold};
  font-size: 16px;
  color: ${Constants.colors.primary[900]};
`;

export default function ButtonSecondary({ title, textColor, ...props }) {
    return (
        <ButtonSecondaryStyle {...props}>
            <ButtonText style={textColor && {color: textColor}}>{title}</ButtonText>
        </ButtonSecondaryStyle>
    );
}