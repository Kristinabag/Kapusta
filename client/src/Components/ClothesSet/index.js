/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeClothesLoader } from '../../redux/actions/loader';
import ClothesLoader from '../Loader/ClothesLoader';
import './style.css';

function ClothesTop({ clothes }) {
  /* all states neccessary for rendering clothes */
  const [hat, setHat] = useState({});
  const [scarf, setScarf] = useState({});
  const [top, setTop] = useState([]);
  const [bottom, setBottom] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [accessory, setAccessory] = useState([]);
  /* loading redux data */
  const loaders = useSelector((state) => state.loaders); // if clothes loaded then display them otherwise display loader
  const renewToggle = useSelector((state) => state.renewToggle);
  /* to change loader status */
  const dispatch = useDispatch();

  console.log('clothes component', clothes);
  useEffect(() => {
    // dispatch(addClothesLoader());
    const layerHat = [];
    const layerScraf = [];
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
    /* firstly we push clothes into layers and types */
    if (clothes.length) {
      clothes.forEach((el) => {
        if (el.type === 'hat') {
          layerHat.push(el);
          return;
        }
        if (el.type === 'scarf') {
          layerScraf.push(el);
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
        if (el.type.slice(0, 9) === 'accessory') {
          layerAccessories.push(el);
        }
      });

      const firstAccessory = layerAccessories.splice(Math.floor(Math.random() * layerAccessories.length), 1)[0];
      /* randomly forming clothing set from layers and types */
      setHat(layerHat[Math.floor(Math.random() * layerHat.length)]);
      setScarf(layerScraf[Math.floor(Math.random() * layerScraf.length)]);
      setTop([layerOneTop[Math.floor(Math.random() * layerOneTop.length)], layerTwoTop[Math.floor(Math.random() * layerTwoTop.length)], layerThreeTop[Math.floor(Math.random() * layerThreeTop.length)], layerFourTop[Math.floor(Math.random() * layerFourTop.length)], layerFiveTop[Math.floor(Math.random() * layerFiveTop.length)], layerSixTop[Math.floor(Math.random() * layerSixTop.length)]]);
      setBottom([layerOneBottom[Math.floor(Math.random() * layerOneBottom.length)], layerTwoBottom[Math.floor(Math.random() * layerTwoBottom.length)]]);
      setShoes([layerOneShoes[Math.floor(Math.random() * layerOneShoes.length)], layerTwoShoes[Math.floor(Math.random() * layerTwoShoes.length)]]);
      setAccessory([firstAccessory, layerAccessories.filter((el) => el.type.slice(-5) !== firstAccessory.type.slice(-5))[0]]);
      dispatch(removeClothesLoader());
    }
  }, [clothes, renewToggle]);

  return (
    <>
      {
      loaders.clothes ? <ClothesLoader />
        : clothes?.length ? (
          <div className="clothes">

            <div className="accessories">
              <h4>Accessories</h4>
              <div className="d-flex flex-column align-items-center accessoriesDiv">
                {accessory[0] && <img src={accessory[0].imgUrl} alt={accessory[0].name} />}
                {accessory[1] && <img src={accessory[1].imgUrl} alt={accessory[1].name} />}
              </div>
            </div>
            <div className="clothingSet">
              <h4>Clothing Set</h4>
              <div className="d-flex flex-column align-items-center imgContainer">
                <div className="d-flex justify-content-center headItem">
                  {hat && <img src={hat.imgUrl} alt={hat.name} />}
                  {scarf && <img src={scarf.imgUrl} alt={scarf.name} />}
                </div>
                <div className="d-flex justify-content-center bodyClothes">
                  {top[0] && <img src={top[0].imgUrl} alt={top[0].name} />}
                  {top[1] && <img src={top[1].imgUrl} alt={top[1].name} />}
                  {top[2] && <img src={top[2].imgUrl} alt={top[2].name} />}
                  {top[3] && <img src={top[3].imgUrl} alt={top[3].name} />}
                  {top[4] && <img src={top[4].imgUrl} alt={top[4].name} />}
                  {top[5] && <img src={top[5].imgUrl} alt={top[5].name} />}
                </div>
                <div className="d-flex justify-content-center pant">
                  {bottom[0] && <img src={bottom[0].imgUrl} alt={bottom[0].name} />}
                  {bottom[1] && <img src={bottom[1].imgUrl} alt={bottom[1].name} />}
                </div>
                <div className="d-flex justify-content-between shoose">
                  {shoes[0] && <img src={shoes[0].imgUrl} alt={shoes[0].name} />}
                  {shoes[1] && <img src={shoes[1].imgUrl} alt={shoes[1].name} />}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h4>Гардероб пуст</h4>
            <Link to="/wardrobe/add">
              <button type="button" className="btn btn-light mx-1 navLink">Добавить новую одежду в гардероб</button>
            </Link>
          </div>
        )
      }
    </>
  );
}

export default ClothesTop;
