import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Card = ({children, title, picture}) => {
  const [maxHeightOfCard, setMaxHeightOfCard] = useState(0);
  const [arrow, setArrow] = useState('▶');

  const checkMaxHeight = function () {
    setMaxHeightOfCard(maxHeightOfCard === 0 ? 500 : 0);
    setArrow(maxHeightOfCard === 0 ? '▼' : '▶');
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={checkMaxHeight}>
        <Text
          style={[
            styles.cardTitle,
            {
              backgroundColor: maxHeightOfCard === 0 ? '#f0eded' : '#0080ff',
              color: maxHeightOfCard === 0 ? '#616060' : '#fff',
            },
          ]}>
          {arrow}&nbsp;
          {title}
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.cardContent,
          {
            maxHeight: maxHeightOfCard,
          },
        ]}>
        <Image
          style={styles.cardPicture}
          source={{
            uri: picture,
          }}
        />
        <Text style={styles.cardDescription}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 32,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardTitle: {
    paddingLeft: 16,
    paddingVertical: 8,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#0080ff',
    textTransform: 'capitalize',
  },
  cardContent: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cardPicture: {
    marginTop: 16,
    width: 250,
    height: 250,
  },
  cardDescription: {
    marginBottom: 32,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
});

export default Card;
