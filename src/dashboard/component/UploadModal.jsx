import React, { useState, useEffect } from 'react';
import '../style/UploadModal.css';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/image/android-chrome-192x192.png';

const UploadModal = ({ onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [countries, setCountries] = useState([]);
  const [images, setImages] = useState(Array(6).fill(''));
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('dollar');
  const [formValid, setFormValid] = useState(false);
  const [numberOfBedroom, setNumberOfBedroom] = useState('')
  const [loading, setLoading] = useState(false);
  const [houseDetailDto, setHouseDetaildto] = useState({
    numberOfBedroom: '',
    price: '',
    houseStatus: '',
  });

  const currencies = [
    { label: 'Dollar', value: 'dollar' },
    { label: 'Naira', value: 'naira' },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        const countryList = data.map((country) => ({
          label: country.name,
          value: country.name,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const isFormValid =
      selectedCountry !== null &&
      selectedState !== null &&
      streetName.trim() !== '' &&
      city.trim() !== '' &&
      postalCode.trim() !== '' &&
      price.trim() !== '' &&
      images.filter((image) => image !== '').length === 6;

    setFormValid(isFormValid);
  }, [selectedCountry, selectedState, streetName, city, postalCode, images, price]);

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const buttonStyle = {
    backgroundColor: formValid ? 'rgb(0, 98, 163)' : 'dimgray',
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setSelectedCurrency(selectedCurrency.value);
  };

  const handleUpload = async () => {
    if (formValid) {
      setLoading(true);
      try {
        const newProperty = {
          userId: 1,
          streetName,
          city,
          state: selectedState,
          postalCode,
          country: selectedCountry.value,
          houseDetailDto: {
            numberOfBedroom: numberOfBedroom,
            price: price,
            images: images.filter((image) => image !== ''),
            houseStatus: 'AVAILABLE',
          },
        };
        if (images[0]) {
          console.log(images[0]);
        }
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch('http://localhost:8080/api/v1/property', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(newProperty),
        });
  
        if (response.ok) {
          toast.success('Property uploaded successfully!');
          setTimeout(() => {
            onClose()
          }, 2000);
        } else {
          setLoading(false);
          toast.error('Error uploading property. Please try again.');
        }
      } catch (error) {
        console.error('Error uploading property:', error);
        setLoading(false);
        toast.error('Error uploading property. Please try again.');
      }
    } else {
      toast.error('Please fill in all required fields and add at least one image.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'streetName':
        setStreetName(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'postalCode':
        setPostalCode(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'numberOfBedroom':
        setNumberOfBedroom(value)
        break;
      default:
        break;
    }
  };

  const handleImageChange = (index, file) => {
    const newImages = [...images];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    } else {
      newImages[index] = '';
      setImages(newImages);
    }
  };

  return (
    <div className="modal-container">
      <div className={`modal-content ${formValid ? '' : 'dim'}`}>
        <div className="top">
          <img className="logo" src={logo} alt="" />
          <h2 className="tag">RealtyHub</h2>
          <h2 className="logoName">Upload Property</h2>
        </div>
        <div className="inputs">
          <input
            type="text"
            name="streetName"
            id="yh"
            placeholder="Enter streetName"
            className={`input ${streetName.trim() === '' ? 'red-border' : ''}`}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="postalCode"
            placeholder="Enter postal code"
            id="yh"
            className={`input ${city.trim() === '' ? 'red-border' : ''}`}
            onChange={handleInputChange}
          />
          <br />
          <div className="dropdown-container">
            <Select
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countries}
              placeholder="Select a country"
              className="select"
            />
          </div>

          <div className="hr">
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              className={`input ${postalCode.trim() === '' ? 'red-border' : ''}`}
              onChange={handleInputChange}
            />
            {selectedCountry && (
              <input
                type="text"
                name="selectedState"
                placeholder="Enter state"
                className={`input ${selectedState?.trim() === '' ? 'red-border' : ''}`}
                onChange={(e) => setSelectedState(e.target.value)}
                id="selected"
              />
            )}
          </div>
        </div>

        <div className="images-container">
          {images.map((image, index) => (
            <div key={index} className="image-input-container">
              <input
                type="file"
                accept="image/*"
                className="image-input"
                onChange={(e) => handleImageChange(index, e.target.files[0])}
              />
              <label className="image-input-label">
                {image && <img src={image} alt={`Image ${index + 1}`} className="image-preview" />}
                {!image && (
                  <>
                    <span className="image-input-text">Choose Image</span>
                  </>
                )}
              </label>
            </div>
          ))}
        </div>

        <div className="pay">
          <input
            type="currency"
            name="price"
            placeholder="Enter price"
            className={`input ${price.trim() === '' ? 'red-border' : ''}`}
            onChange={handleInputChange}
          />
         <input
         type="number"
         name="numberOfBedroom"
         placeholder="Enter number of bedrooms"
         className={`input ${numberOfBedroom.trim() === '' ? 'red-border' : ''}`}
         onChange={handleInputChange}/>
         <Select
            value={currencies.find((currency) => currency.value === selectedCurrency)}
            onChange={handleCurrencyChange}
            options={currencies}
            className="select"
          />
        </div>
        <button className="button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={handleUpload} disabled={!formValid} style={buttonStyle}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UploadModal;
