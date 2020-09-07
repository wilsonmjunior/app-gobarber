import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 60px;
`;

export const ContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

interface UserAvatarProps {
  isImage: boolean;
}

export const UserAvatar = styled.Image<UserAvatarProps>`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
  ${props => !props.isImage && css`
    background: #f4ede8;
  `}
`;
