import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import Icon from "../../common/Icon";
import { ICONS, ICON_SIZES } from "../../../constants";

const ActionButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.messageButton} activeOpacity={0.8}>
        <Icon name={ICONS.MESSAGE} size={ICON_SIZES.SMALL} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.followButton} activeOpacity={0.8}>
        <Text style={styles.followButtonText}>متابعة</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
