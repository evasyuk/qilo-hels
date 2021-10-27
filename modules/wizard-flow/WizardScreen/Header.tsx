import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type HeaderProps = {
  title: string;
  onBack: () => void;
}

export const Header = ({ title, onBack }: HeaderProps) => (
  <HeaderWrapper>
    <BackButtonWrapper onPress={onBack}>
      <Icon name="chevron-left" size={16} color="#000" />
    </BackButtonWrapper>
    <HeaderTitle>
      {title}
    </HeaderTitle>
    <EmptyView />
  </HeaderWrapper>
)

const HeaderWrapper = styled.View`
  height: 64px;
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

const BackButtonWrapper = styled.TouchableOpacity`
  width: 56px;
  height: 64px;

  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;

  text-align: center;

  color: #222222;
`

const EmptyView = styled.View`
  width: 64px;
  height: 64px;
`
