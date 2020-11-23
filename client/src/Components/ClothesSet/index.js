import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLoader, removeLoader } from '../../redux/actions/loader';
import Loader from '../Loader/Loader';

function ClothesTop() {
  /* all states neccessary for rendering clothes */
  const [hat, setHat] = useState({});
  const [top, setTop] = useState([]);
  const [bottom, setBottom] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [accessory, setAccessory] = useState({});
  const [bag, setBag] = useState({});
  /* loading redux data */
  const clothes = useSelector((state) => state.clothes);
  const loader = useSelector((state) => state.loader); // if clothes loaded then display them otherwise display loader
  /* to change loder status */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLoader());
    const layerHat = [];
    const layerOneTop = [];
    const layerTwoTop = [];
    const layerThreeTop = [];
    const layerFourTop = [];
    const layerFiveTop = [];
    const layerSixTop = [];
    const layerOneBottom = [];
    const layerTwoBottom = [];
    const layerOneShoes = [];
    const layerTwoShoes = [];
    const layerAccessories = [];
    const layerBag = [];
    /* firstly we push clothes into layers and types */
    if (clothes.length) {
      clothes.forEach((el) => {
        if (el.type === 'hat') {
          layerHat.push(el);
          return;
        }
        if (el.layer === 1 && el.type === 'top') {
          layerOneTop.push(el);
          return;
        }
        if (el.layer === 2 && el.type === 'top') {
          layerTwoTop.push(el);
          return;
        }
        if (el.layer === 3 && el.type === 'top') {
          layerThreeTop.push(el);
          return;
        }
        if (el.layer === 4 && el.type === 'top') {
          layerFourTop.push(el);
          return;
        }
        if (el.layer === 5 && el.type === 'top') {
          layerFiveTop.push(el);
          return;
        }
        if (el.layer === 6 && el.type === 'top') {
          layerSixTop.push(el);
          return;
        }
        if (el.layer === 1 && el.type === 'bottom') {
          layerOneBottom.push(el);
          return;
        }
        if (el.layer === 2 && el.type === 'bottom') {
          layerTwoBottom.push(el);
          return;
        }
        if (el.layer === 1 && el.type === 'shoes') {
          layerOneShoes.push(el);
          return;
        }
        if (el.layer === 2 && el.type === 'shoes') {
          layerTwoShoes.push(el);
          return;
        }
        if (el.type === 'belt' || el.type === 'glasses') {
          layerAccessories.push(el);
          return;
        }
        if (el.type === 'bag') {
          layerBag.push(el);
        }
      });
      /* randomly forming clothing set from layers and types */
      setHat(layerHat[Math.floor(Math.random() * layerHat.length)]);
      setTop([layerOneTop[Math.floor(Math.random() * layerOneTop.length)], layerTwoTop[Math.floor(Math.random() * layerTwoTop.length)], layerThreeTop[Math.floor(Math.random() * layerThreeTop.length)], layerFourTop[Math.floor(Math.random() * layerFourTop.length)], layerFiveTop[Math.floor(Math.random() * layerFiveTop.length)], layerSixTop[Math.floor(Math.random() * layerSixTop.length)]]);
      setBottom([layerOneBottom[Math.floor(Math.random() * layerOneBottom.length)], layerTwoBottom[Math.floor(Math.random() * layerTwoBottom.length)]]);
      setShoes([layerOneShoes[Math.floor(Math.random() * layerOneShoes.length)], layerTwoShoes[Math.floor(Math.random() * layerTwoShoes.length)]]);
      setAccessory(layerAccessories[Math.floor(Math.random() * layerAccessories.length)]);
      setBag(layerBag[Math.floor(Math.random() * layerBag.length)]);
      dispatch(removeLoader());
    }
  }, [clothes]);

  return (
    <>
      {
      loader ? <Loader />
        : (
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">{hat && <img src={hat.imgUrl} alt={hat.name} />}</div>
            <div className="d-flex justify-content-center">
              {top[0] && <img src={top[0].imgUrl} alt={top[0].name} />}
              {top[1] && <img src={top[1].imgUrl} alt={top[1].name} />}
              {top[2] && <img src={top[2].imgUrl} alt={top[2].name} />}
              {top[3] && <img src={top[3].imgUrl} alt={top[3].name} />}
              {top[4] && <img src={top[4].imgUrl} alt={top[4].name} />}
              {top[5] && <img src={top[5].imgUrl} alt={top[5].name} />}
            </div>
            <div className="d-flex justify-content-center">
              {bottom[0] && <img src={bottom[0].imgUrl} alt={bottom[0].name} />}
              {bottom[1] && <img src={bottom[1].imgUrl} alt={bottom[1].name} />}
            </div>
            <div className="d-flex justify-content-between">
              {shoes[0] && <img src={shoes[0].imgUrl} alt={shoes[0].name} />}
              {shoes[1] && <img src={shoes[1].imgUrl} alt={shoes[1].name} />}
            </div>
            <div className="d-flex justify-content-between">
              {accessory && <img src={accessory.imgUrl} alt={accessory.name} />}
              {bag && <img src={bag.imgUrl} alt={bag.name} />}
            </div>
          </div>
        )
      }
    </>
  );
}

export default ClothesTop;
