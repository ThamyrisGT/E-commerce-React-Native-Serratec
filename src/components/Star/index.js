import React, {useState} from 'react';
import IconStar from 'react-native-vector-icons/FontAwesome';

const Star = () => {
  const [cor, setCor] = useState('gray');
  const [cor2, setCor2] = useState('gray');
  const [cor3, setCor3] = useState('gray');
  const [cor4, setCor4] = useState('gray');
  const [cor5, setCor5] = useState('gray');

  return (
    <>
      <IconStar
        name="star"
        size={30}
        color={cor}
        onPress={() => (cor == 'gray' ? setCor('yellow') : setCor('gray'))}
      />
      <IconStar
        name="star"
        size={30}
        color={cor2}
        onPress={() => (cor2 == 'gray' ? setCor2('yellow') : setCor2('gray'))}
      />
      <IconStar
        name="star"
        size={30}
        color={cor3}
        onPress={() => (cor3 == 'gray' ? setCor3('yellow') : setCor3('gray'))}
      />
      <IconStar
        name="star"
        size={30}
        color={cor4}
        onPress={() => (cor4 == 'gray' ? setCor4('yellow') : setCor4('gray'))}
      />
      <IconStar
        name="star"
        size={30}
        color={cor5}
        onPress={() => (cor5 == 'gray' ? setCor5('yellow') : setCor5('gray'))}
      />
    </>
  );
};

export default Star;
