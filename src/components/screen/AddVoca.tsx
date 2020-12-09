import React, {ReactElement, useState} from 'react';

import {RootStackNavigationProps} from '../navigation/RootStackNavigator';
import styled from 'styled-components/native';
import {colors} from '../../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SvgBack, SvgCheck} from '../../utils/Icons';
import {FlatList} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
`;

const BackButton = styled.TouchableOpacity`
  padding: 20px;
  justify-content 
`;

const InputVocaWrapper = styled.View`
  width: 100%;
  padding: 30px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.darkGray2};
`;

const InputVoca = styled.TextInput`
  font-size: 30px;
  font-weight: bold;
`;

const ResultItem = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputResult = styled.TextInput`
  flex: 1;
  font-size: 30px;
  font-weight: 300;
  margin-left: 10px;
`;

const ResultWrapper = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const ResultText = styled.Text`
  font-size: 30px;
  font-weight: 300;
`;

interface Props {
  navigation: RootStackNavigationProps<'AddVoca'>;
}

function AddVoca(props: Props): ReactElement {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const dummy: string[] = [
    '안녕하세용',
    '더미',
    '데이터 입니다아ㅏ',
    '안녕하세용',
    '더미',
    '데이터 입니다아ㅏ',
  ];

  const [inputVoca, setInputVoca] = useState<string>();
  const [inputResults, setInputResults] = useState<string[]>(dummy);

  const [selecteResultItems, setSelecteResultItems] = useState<number[]>();

  const goToBack = (): void => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const _renderItem = (item: string, index: number): ReactElement => {
    return (
      <ResultItem key={`items__${index}`}>
        <SvgCheck fill={colors.dark} />
        <InputResult
          multiline={true}
          value={item}
          onChangeText={(text) => {
            return [
              inputResults.slice(0, index),
              text,
              inputResults.slice(index + 1),
            ];
          }}
        />
      </ResultItem>
    );
  };

  return (
    <Container style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <Header>
        <BackButton onPress={goToBack}>
          <SvgBack fill={colors.dark} />
        </BackButton>
      </Header>
      <InputVocaWrapper>
        <InputVoca
          multiline={true}
          value={inputVoca}
          onChangeText={(text) => setInputVoca(text)}
          placeholder={'단어를 입력해주세요 :)'}
        />
      </InputVocaWrapper>
      <FlatList
        data={inputResults}
        keyExtractor={(item, index): string => index.toString()}
        renderItem={({item, index}): ReactElement => {
          return (
            <ResultItem
              key={`items__${index}`}
              onPress={(): void => {
                if (selecteResultItems?.includes(index)) {
                  const newItem = selecteResultItems.filter((i) => i !== index);

                  setSelecteResultItems(newItem);
                  return;
                }

                setSelecteResultItems((prev) => {
                  if (prev) {
                    return prev.concat(index);
                  }

                  return [index];
                });
              }}>
              {selecteResultItems?.includes(index) ? (
                <SvgCheck fill={colors.positive} />
              ) : (
                <SvgCheck fill={colors.dark} />
              )}

              <ResultWrapper>
                <ResultText>{item}</ResultText>
              </ResultWrapper>
              {/* <InputResult
                multiline={true}
                value={item}
                onChangeText={(text) => {
                  return [
                    inputResults.slice(0, index),
                    text,
                    inputResults.slice(index + 1),
                  ];
                }}
              /> */}
            </ResultItem>
          );
        }}
      />
    </Container>
  );
}

export default AddVoca;
