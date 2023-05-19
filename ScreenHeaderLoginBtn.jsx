import { TouchableOpacity, Image, onPress} from 'react-native';
import { useNavigation, useRouter } from 'expo-router';

import styles from './screenheader.style'

const ScreenHeaderLeftBtn = ({iconUrl, dimension, handlePress}) => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('welcome')}>
      <Image 
      source={iconUrl}
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderLeftBtn;