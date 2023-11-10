// components/FinancialInformation.js
import React from 'react';
import { TextField } from '@mui/material';

const FinancialInformation = ({ formData, setFormData }) => {
  return (
    <div>
      <TextField label="Tax returns for the past 2 years" fullWidth />
      <TextField label="Credit history and credit score" fullWidth />
      <TextField label="Bank statements last 3 months" fullWidth />
    </div>
  );
};

export default FinancialInformation;
