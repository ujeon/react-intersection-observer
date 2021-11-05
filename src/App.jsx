import { useCallback, useState, useMemo, useEffect, useRef} from 'react';
import ColorBoard from './components/ColorBoard/ColorBoard.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import _map from 'lodash/map';
import _forEach from 'lodash/forEach';
import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
import { rainbowColors } from './colors';

const App = () => {
  const [ colors ] = useState(rainbowColors);
  const [ currColor, setCurrColor ] = useState(0);
  const colorsRef = useRef([]);

  const rainbowboards = useCallback(() => 
    _map(colors, (el, i)=> <ColorBoard key={el.name.kr} color={el.hex} ref={r => colorsRef.current[i] = r}/>)
  , [colors]);

  const scrollObserver = useMemo(() => new IntersectionObserver(
    entries => {
      console.log({ entries });
      const { target } = _find(entries, el => el.isIntersecting) || {}
      setCurrColor(_findIndex(colorsRef.current, target));
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
  ), []);

  useEffect(() => {
    const refs = colorsRef.current
    _forEach(refs, el => scrollObserver.observe(el));
    return () => {_forEach(refs, el => scrollObserver.unobserve(el))};
  }, [colorsRef, scrollObserver]);

  return (
    <>
      <Navigation hexCode={colors[currColor].hex} />
      {rainbowboards()}
    </>
  );
}

export default App;
