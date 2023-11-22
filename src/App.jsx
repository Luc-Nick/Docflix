import './App.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <Splide aria-label="My Favorite Images"
          options={ {
            rewind: true,
            width : 800,
            gap   : '1rem',
          } }
        >
        <SplideSlide>
          <img className="splide__slide" src="/calden.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/festival.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/scooter.jpg" alt="Image 3" />
        </SplideSlide>
      </Splide>
    </>
  )
}

export default App
