import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { styles } from './styles';
import SearchInput from '../../components/search_input/SearchInput';
import { COLORS, SIZES } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../redux/reducers/homeReducer';
import { setList, setSearchItem } from '../../redux/actions/homeAction';
import customData from '../../../leaderboard.json';
import { RootState } from '../../redux/store';
import { AppActions } from '../../redux/actions/actionTypes';



const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const dataArray = Object.entries(customData).map(([key, value]) => (value));

  const list = useSelector((state: RootState) => state.home?.items);
  const searchItem = useSelector((state: RootState) => state?.home?.searchItem);
  // const dispatch = useDispatch<React.Dispatch<AppActions>>();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setList(dataArray));
  }, [searchValue === '']);

  const onSearch = () => {
    const sortedData = [...list].sort((a, b) => b.bananas - a.bananas);

    const user = sortedData?.find((u: Item) => u.name?.toLowerCase() === searchValue?.toLowerCase());
    if (!user) {
      Alert.alert('This user name does not exist! Please specify an existing user name!');
      return;
    }

    let topList = sortedData.slice(0, 10);

    const userIndex = sortedData.findIndex(u => u.name?.toLowerCase() === searchValue?.toLowerCase());
    if (userIndex >= 10) {
      topList[9] = { ...user, stars: userIndex + 1 };
    }

    topList = topList.map((user, index) => ({
      ...user,
      stars: index + 1
    }));
    dispatch(setList(topList));
    dispatch(setSearchItem(searchValue));
  };


  const handleOnChange = (text: string) => {
    if (!text) {
      dispatch(setList(list))
      dispatch(setSearchItem(''));

    }
    setSearchValue(text)
  }

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    return (
      <View style={{ ...styles.row, backgroundColor: index % 2 ? COLORS.lightGray : 'transparent' }} key={index}>
        <Text style={{ ...styles.cell, color: item?.name?.toLowerCase() === searchItem?.toLowerCase() ? 'red' : COLORS.black }}>{item.name}</Text>
        <Text style={{ ...styles.cell, textAlign: 'right' }}>{item.stars}</Text>
        <Text style={{ ...styles.cell, textAlign: 'right' }}>{item.bananas}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <View style={{ flex: 0.8 }}>
            <SearchInput
              placeholder="Search user name"
              value={searchValue}
              onChangeText={handleOnChange}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={onSearch}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.row, backgroundColor: COLORS.darkGray }}>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.header}>Rank</Text>
          <Text style={styles.header}>Number of bananas</Text>
        </View>
        {
          list?.length > 0 &&
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.uid}
          />
        }

      </View>
    </SafeAreaView>
  );
};

export default Home;
