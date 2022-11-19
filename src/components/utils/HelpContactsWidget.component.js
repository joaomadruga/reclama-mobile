import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/Constants";

const HelpContactsWidgetStyle = styled.TouchableHighlight`
  background-color: "transparent";
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border: solid 1px ${Constants.colors.primary[900]};
  margin-right: 16px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-family: ${Constants.fontWeightConfig.Bold};
  font-size: 36px;
  color: ${Constants.colors.primary[600]};
`;

const Subtitle = styled.Text`
  font-family: ${Constants.fontWeightConfig.Regular};
  font-size: 10px;
  color: ${Constants.colors.gray[0]};
  max-width: 100px;
  text-align: center;
`;

export default function HelpContactsWidget({ title, subtitle, ...props }) {
    return (
        <HelpContactsWidgetStyle {...props}>
            <>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{title}</Title>
            </>
        </HelpContactsWidgetStyle>
    );
}