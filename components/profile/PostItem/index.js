import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Image from "../../common/Image";
import Icon from "../../common/Icon";
import { ICONS, ICON_SIZES } from "../../../constants";
import { formatLikes } from "../../../utils/helpers";

const PostItem = ({ post, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(post)}
      activeOpacity={0.9}
    >
      <Image source={post.image} style={styles.postImage} resizeMode="cover" />

      <View style={styles.overlay}>
        <View style={styles.playCountContainer}>
          <Text style={styles.playCountText}>{formatLikes(post.likes)}</Text>
          <Icon name={ICONS.PLAY} size={ICON_SIZES.SMALL} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
