/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useDispatch } from 'react-redux';
import { loadWeatherSaga } from '../../redux/actions/weather';

function AutocompleteInput() {
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();

  const selectHandler = async (value) => {
    const result = await geocodeByAddress(value);
    setAddress(result[0].address_components[0].long_name);
    const latLng = await getLatLng(result[0]);
    dispatch(loadWeatherSaga(latLng));
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={selectHandler}
      >
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Сменить город', className: 'list-group-item' })} />

            <div>
              {loading && <div>Загружается ...</div>}

              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#b2bec3', cursor: 'pointer', maxWidth: '303px' }
                  : { backgroundColor: '#ecf0f1', cursor: 'pointer', maxWidth: '303px' };

                return <div {...getSuggestionItemProps(suggestion, { className, style })}>{suggestion.description}</div>;
              })}
            </div>
          </div>
        )}

      </PlacesAutocomplete>
    </div>
  );
}

export default AutocompleteInput;
