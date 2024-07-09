"use client";

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';

const countryOptions = [
  { value: 'IN', label: 'India' },
  { value: 'US', label: 'United States' },
  // Add more countries as needed
];

const stateOptions = {
  IN: [
    { value: 'MH', label: 'Maharashtra' },
    { value: 'GJ', label: 'Gujarat' },
    // Add more states as needed
  ],
  US: [
    { value: 'CA', label: 'California' },
    { value: 'NY', label: 'New York' },
    // Add more states as needed
  ],
};

const cityOptions = {
  MH: [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' },
  ],
  GJ: [
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Surat', label: 'Surat' },
  ],
  CA: [
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'San Francisco', label: 'San Francisco' },
  ],
  NY: [
    { value: 'New York City', label: 'New York City' },
    { value: 'Buffalo', label: 'Buffalo' },
  ],
};

function Page() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setCountry(country.iso2);
    setState(null);
    setCity(null);
  };

  return (
    <form className="max-w-lg mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-11">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">First Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Last Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Country</label>
        <Select
          options={countryOptions}
          value={countryOptions.find(option => option.value === country)}
          onChange={selected => setCountry(selected.value)}
          className="mt-1"
        />
      </div>

      {country && (
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">State</label>
          <Select
            options={stateOptions[country]}
            value={stateOptions[country]?.find(option => option.value === state)}
            onChange={selected => setState(selected.value)}
            className="mt-1"
          />
        </div>
      )}

      {state && (
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">City</label>
          <Select
            options={cityOptions[state]}
            value={cityOptions[state]?.find(option => option.value === city)}
            onChange={selected => setCity(selected.value)}
            className="mt-1"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Phone Number</label>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={handlePhoneChange}
          containerClass="w-full mt-1"
          inputClass="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default Page;
