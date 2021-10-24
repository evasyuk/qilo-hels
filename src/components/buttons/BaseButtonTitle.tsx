import styled from 'styled-components/native';
import {ActivatedInterface} from '@components/buttons/BaseButton';

export const Title = styled.Text<ActivatedInterface>`
  color: ${props => props.activated ? '#FFF' : '#027AFF'};
  font-size: 20px;
  font-weight: 600;
`;
