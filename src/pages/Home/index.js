import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import axios from 'axios';
import {ChuckNorrisAvatar} from '../../assets';

const HomeScreen = ({navigation}) => {
  const {state} = useContext(GlobalContext);
  const {user, jokes, setJokes} = state;
  const [loading, setLoading] = useState(false);

  const scrollViewRef = useRef();

  const handleGenerateJokes = async () => {
    setLoading(true);
    const {data} = await axios.get(`https://api.chucknorris.io/jokes/random`);
    let norrisJoke = {
      id: data.id,
      avatar: data.icon_url,
      joke: data.value,
    };
    setJokes([...jokes, norrisJoke]);
    setLoading(false);
  };
  useEffect(() => {
    console.log(jokes);
    if (Object.keys(user).length === 0) {
      navigation.navigate('Login');
    }
  }, [user, navigation, jokes, loading]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Chuck Norris Jokes</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {jokes.length > 0 &&
            jokes.map(norris => {
              return (
                <View style={styles.jokeList} key={norris.id}>
                  <Image
                    source={ChuckNorrisAvatar}
                    style={styles.chuckNorrisAvatar}
                  />
                  <Text style={styles.chuckNorrisJoke}>{norris.joke}</Text>
                </View>
              );
            })}
        </ScrollView>
      )}

      <Button
        onPress={() => handleGenerateJokes()}
        title="Get Jokes"
        style={{width: '100%'}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#e5e5e5',
  },
  jokeList: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 5,
    paddingTop: 10,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  chuckNorrisAvatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  chuckNorrisJoke: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
