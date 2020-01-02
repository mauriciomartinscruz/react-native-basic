import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
        </ScrollView>
        <ScrollView style={styles.bodyComment}>
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>
          
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>
          
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>
          
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>
          
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>
          
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>
          
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Study react native</Text>
            <Text style={styles.postDescription}> Lorin ipsum </Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  bodyComment: {
    backgroundColor: Colors.dark,
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 3
  },
  
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  postDescription: {
    color: "#777"
  }
});

export default App;
