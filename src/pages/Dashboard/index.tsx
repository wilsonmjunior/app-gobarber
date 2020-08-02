import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
