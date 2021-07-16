import React, {useState} from 'react';
import IconStar from 'react-native-vector-icons/FontAwesome';

const Star = () => {
  const [cor, setCor] = useState('gray');
  const [cor2, setCor2] = useState('gray');
  const [cor3, setCor3] = useState('gray');
  const [cor4, setCor4] = useState('gray');
  const [cor5, setCor5] = useState('gray');

  const allGray = () => {
    setCor('gray');
    setCor2('gray');
    setCor3('gray');
    setCor4('gray');
    setCor5('gray');
  };
  const acendeEstrela = num => {
    switch (num) {
      case 1:
        allGray();
        setCor('yellow');
        break;

      case 2:
        allGray();
        setCor('yellow');
        setCor2('yellow');
        break;

      case 3:
        allGray();
        setCor('yellow');
        setCor2('yellow');
        setCor3('yellow');
        break;

      case 4:
        allGray();
        setCor('yellow');
        setCor2('yellow');
        setCor3('yellow');
        setCor4('yellow');
        break;

      default:
        allGray();
        setCor('yellow');
        setCor2('yellow');
        setCor3('yellow');
        setCor4('yellow');
        setCor5('yellow');
    }
  };
  return (
    <>
      <IconStar
        name="star"
        size={30}
        color={cor}
        onPress={() => {
          cor == 'gray' ? acendeEstrela(1) : allGray();
        }}
      />
      <IconStar
        name="star"
        size={30}
        color={cor2}
        onPress={() => {
          cor2 == 'gray' ? acendeEstrela(2) : allGray();
        }}
      />
      <IconStar
        name="star"
        size={30}
        color={cor3}
        onPress={() => {
          cor3 == 'gray' ? acendeEstrela(3) : allGray();
        }}
      />
      <IconStar
        name="star"
        size={30}
        color={cor4}
        onPress={() => {
          cor4 == 'gray' ? acendeEstrela(4) : allGray();
        }}
      />
      <IconStar
        name="star"
        size={30}
        color={cor5}
        onPress={() => {
          cor5 == 'gray' ? acendeEstrela(5) : allGray();
        }}
      />
    </>
  );
};

export default Star;
