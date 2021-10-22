import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import Shimmer from 'react-native-shimmer';

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      {isVisible && (
        <Shimmer>
          <Text>Loading...</Text>
        </Shimmer>
      )}
      <Button
        onPress={() => setIsVisible(!isVisible)}
        title={isVisible ? 'Hide' : 'Visible'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
