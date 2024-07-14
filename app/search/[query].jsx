import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyState from '../../components/EmptyState';
import SearchInput from '../../components/SearchInput';
import VideoCard from '../../components/VideoCard';
import { images } from '../../constants';
import { search } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';

const Search = () => {
  const { query } = useLocalSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const { data: searchedPosts, refetch } = useAppwrite(() => search(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={searchedPosts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-3 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {query}
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-9 h-10"
                />
              </View>
            </View>

            <SearchInput placeholder={'Search for video topic...'} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title={'No Videos Found'}
            subTitle={'Be the first one to upload a video'}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
