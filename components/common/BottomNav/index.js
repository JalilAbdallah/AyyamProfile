import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from '../Icon';
import { COLORS, ICONS, ICON_SIZES } from '../../../constants';

const BottomNav = ({ activeTab = 'play' }) => {
  const navItems = [
    { 
      id: 'search', 
      icon: ICONS.SEARCH 
    },
    { 
      id: 'clock', 
      icon: ICONS.CLOCK 
    },
    { 
      id: 'plus', 
      icon: ICONS.PLUS 
    },
    { 
      id: 'play', 
      icon: ICONS.PlaySquare 
    },
    { 
      id: 'home', 
      icon: ICONS.HOME 
    },
  ];

  const handleTabPress = (tabId) => {
    console.log('Tab pressed:', tabId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => handleTabPress(item.id)}
            activeOpacity={0.7}
          >
            <Icon
              name={item.icon}
              size={ICON_SIZES.LARGE}
              color={activeTab === item.id ? COLORS.SECONDARY : COLORS.GRAY}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomNav;