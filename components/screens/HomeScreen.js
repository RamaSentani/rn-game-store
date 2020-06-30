import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

import Text from "../Text";

export default HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large>
          Hello{" "}
          <Text large bold>
            CS50M,
          </Text>
          {`\n`}
          <Text large bold>
            Games for Today
          </Text>
        </Text>

        <Avatar source={require('')}
      </Header>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #120d31;
`;

const Header = styled.View``;
