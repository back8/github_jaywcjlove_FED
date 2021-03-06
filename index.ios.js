/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet
} from 'react-native';

const TabBarView = require('./App/View/TabBar')

class FED extends Component {
  render() {
    return (
      <TabBarView style={styles.container} />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('FED', () => FED);
