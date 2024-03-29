import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';
import Card from './Card';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: Colors.gray,
  },
  item: {
    padding: 10,
    flexDirection: 'column',
  },
  titleText: {
    fontWeight: 'bold',
  },
});

const InfiniteHits = ({ hits, hasMore, refine }) => (
  <FlatList
    data={hits}
    keyExtractor={item => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refine()}
    renderItem={({ item }) => (
      <Card
        item={item}
        onBook={() => {}}
      />
    )}
  />
);

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);
