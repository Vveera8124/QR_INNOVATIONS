// components/BusinessExperience.js
import React from 'react';
import { TextField } from '@mui/material';

const BusinessExperience = ({ formData, setFormData }) => {
  return (
    <div>
      <TextField label="Details of any prior business experience" fullWidth />
      <TextField label="Explanation of why you are interested in this specific franchise opportunity" fullWidth />
    </div>
  );
};

export default BusinessExperience;
