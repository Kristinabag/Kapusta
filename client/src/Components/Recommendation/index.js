/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Recommendation() {
  const [weatherType, setWeatherType] = useState('');
  const [temperatureType, setTemperatureType] = useState('');
  console.log(weatherType, temperatureType);

  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    if (weather.main) {
      const temperature = weather.main.temp;
      const weatherId = weather.weather[0].id;

      const weathType = weatherId >= 200 && weatherId <= 531
        ? 'rain'
        : weatherId >= 600 && weatherId <= 622
          ? 'snow'
          : weatherId === 800
            ? 'clear'
            : 'clouds';

      const tempType = temperature < -20
        ? 'extraFreeze'
        : temperature >= -20 && temperature < 0
          ? 'freeze'
          : temperature >= 0 && temperature < 11
            ? 'cold'
            : temperature >= 11 && temperature < 21
              ? 'warm'
              : 'hot';

      setWeatherType(weathType);
      setTemperatureType(tempType);
    }
  }, [weather]);

  const text = weatherType === 'clear' && temperatureType === 'hot'
    ? 'Наслаждайся этим чудесным солнечным днем! Из одежды сегодня понадобится самый минимум. И не забудь крем от солнца '
    : weatherType === 'clear' && temperatureType === 'warm'
      ? 'Наслаждайся этим чудесным солнечным днем! Не забудь крем от солнца и одеться по погоде'
      : weatherType === 'clear' && temperatureType === 'сold'
        ? 'Сегодня прохладный, зато солнечный день! Оденься по погоде не забудь крем от солнца '
        : weatherType === 'clear' && temperatureType === 'freeze'
          ? 'Сегодня морозно и солнечно. Оденься по погоде и наслаждайся этим чудесным днем!'
          : weatherType === 'clear' && temperatureType === 'extraFreeze'
            ? 'Брррр... Как же сегодня холодно... Зато солнце светит ярко! Оденься потепелее, и мороз станет не страшен!'
            : weatherType === 'clouds' && temperatureType === 'hot'
              ? 'Сегодня прекрасный теплый день! Из одежды сегодня понадобится самый минимум.'
              : weatherType === 'clouds' && temperatureType === 'warm'
                ? 'Сегодня прекрасный теплый день! Главное - одеться по погоде'
                : weatherType === 'clouds' && temperatureType === 'cold'
                  ? 'Сегодня прохладно, одевайся потепелее. Посмотри, какие комплекты подойдут для холодной погоды'
                  : weatherType === 'clouds' && temperatureType === 'freeze'
                    ? 'На улице мороз, одевайся потепелее. Посмотри, какие комплекты подойдут для зимней погоды'
                    : weatherType === 'clouds' && temperatureType === 'extraFreeze'
                      ? 'Брррр... Какой же сегодня мороз... Оденься потепелее - посмотри, какие комплекты для этого подойдут!'
                      : weatherType === 'rain' && temperatureType === 'hot'
                        ? 'Сегодня прекрасный жаркий день, и летний дождь его не испортит! Из одежды понадобится самый минимум, главный аксессуар сегодня - зонт'
                        : weatherType === 'rain'
        && (temperatureType === 'warm'
          || temperatureType === 'cold'
          || temperatureType === 'freeze')
                          ? 'За окном дождь. Главный аксессуар сегодня - зонт'
                          : weatherType === 'snow'
        && (temperatureType === 'cold'
          || temperatureType === 'freeze'
          || temperatureType === 'extraFreeze')
                            ? 'За окном настоящая зима - белая, снежная! Одевайся потеплее, и можно играть в снежки'
                            : '';

  return (
    weather && (
      <div className="card border-dark mb-3">
        <div className="card-header">Рекомендации</div>
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    )
  );
}

export default Recommendation;
