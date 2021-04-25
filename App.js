import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, ActivityIndicator} from 'react-native';

import Card from './Card';

const App: () => Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pokedex.cedric-josso.net/browse')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data.map((pokemon, key) => (
            <View key={key}>
              <Card title={pokemon.name} picture={pokemon.picture}>
                {pokemon.description}
              </Card>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
