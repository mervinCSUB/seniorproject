import { TouchableOpacity, Image, onPress} from 'react-native';
import { useNavigation, useRouter } from 'expo-router';

import styles from './screenheader.style'

const ScreenHeaderLeftProfileBtn = ({iconUrl, dimension, handlePress}) => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('Home')}>
      <Image 
      source={iconUrl}
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderLeftProfileBtn;