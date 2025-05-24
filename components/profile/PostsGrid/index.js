import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import ContentTabBar from '../ContentTabBar';
import PostItem from '../PostItem';

const PostsGrid = ({ posts = [] }) => {
  const [activeTab, setActiveTab] = useState('grid');

  const handlePostPress = (post) => {
    console.log('Post pressed:', post.id);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    console.log('Tab changed to:', tabId);
  };

  const renderPost = ({ item, index }) => {
    const positionInRow = index % 3;
    
    return (
      <View style={[
        styles.postContainer,
      ]}>
        <PostItem 
          post={item} 
          onPress={handlePostPress}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ContentTabBar 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      {activeTab === 'grid' && (
        <FlatList
          data={posts}
          renderItem={renderPost}
          numColumns={3}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={styles.row}
        />
      )}
      
      {activeTab === 'play' && (
        <View style={styles.emptyContainer}>

        </View>
      )}
      
      {activeTab === 'users' && (
        <View style={styles.emptyContainer}>

        </View>
      )}
    </View>
  );
};

export default PostsGrid;