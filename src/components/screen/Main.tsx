import React, {ReactElement} from 'react';

import {RootStackNavigationProps} from '../navigation/RootStackNavigator';
import styled from 'styled-components/native';
import {colors} from '../../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

const MoveButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${colors.dark};
  font-size: 30px;
  font-weight: bold;
`;

interface Props {
  navigation: RootStackNavigationProps<'Main'>;
}

function Main(props: Props): ReactElement {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const goToOther = (where: string): void => {
    if (navigation) {
      navigation.navigate(where);
    }
  }

  return (
    <Container style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <MoveButton
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray2
        }}
        onPress={(): void => goToOther('AddVoca')}
      >
        <StyledText>단어쓰기</StyledText>
      </MoveButton>
      <MoveButton
        onPress={(): void => goToOther('VocaList')}
      >
        <StyledText>암기하기</StyledText>
      </MoveButton>
    </Container>
  );
}

export default Main;
