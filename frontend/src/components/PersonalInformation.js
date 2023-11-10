// components/PersonalInformation.js
import React from 'react';
import { TextField } from '@mui/material';

const PersonalInformation = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    // Update formData when text fields change
    setFormData({
      ...formData,
      personalInformation: {
        ...formData.personalInformation,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <TextField
        label="Full legal name"
        fullWidth
        name="fullName"
        onChange={handleChange}
      />
      <TextField
        label="Contact information (address)"
        fullWidth
        name="address"
        onChange={handleChange}
      />
      <TextField
        label="Phone number"
        fullWidth
        name="phoneNumber"
        onChange={handleChange}
      />
      <TextField
        label="Email"
        fullWidth
        name="email"
        onChange={handleChange}
      />
      <TextField
        label="Date of birth"
        type="date"
        fullWidth
        name="dateOfBirth"
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Social security number, Passport, Country Identity Document number or equivalent"
        fullWidth
        name="idNumber"
        onChange={handleChange}
      />
      {/* Add more TextFields for other personal information */}
    </div>
  );
};

export default PersonalInformation;
