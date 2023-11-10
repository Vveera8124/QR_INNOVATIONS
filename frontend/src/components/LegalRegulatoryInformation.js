// components/LegalRegulatoryInformation.js
import React from 'react';
import { TextField } from '@mui/material';

const LegalRegulatoryInformation = ({ formData, setFormData }) => {
  return (
    <div>
      <TextField label="Any history of legal issues, lawsuits, or criminal convictions" fullWidth />
      <TextField label="Confirmation of legal status and eligibility to work in the country" fullWidth />
    </div>
  );
};

export default LegalRegulatoryInformation;
