import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from '../../common/Icon';
import { COLORS, ICONS, ICON_SIZES } from '../../../constants';

const ContentTabBar = ({ activeTab = 'grid', onTabChange }) => {
  const tabs = [
    { id: 'users', icon: ICONS.USERS },
    { id: 'play', icon: ICONS.PLAY },
    { id: 'grid', icon: ICONS.GRID }
  ];

  const handleTabPress = (tabId) => {
    onTabChange?.(tabId);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            activeTab === tab.id && styles.activeTab
          ]}
          onPress={() => handleTabPress(tab.id)}
          activeOpacity={0.7}
        >
          <Icon
            name={tab.icon}
            size={ICON_SIZES.LARGE}
            color={activeTab === tab.id ? COLORS.SECONDARY : COLORS.GRAY}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContentTabBar;