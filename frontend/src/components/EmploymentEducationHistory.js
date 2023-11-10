// components/EmploymentEducationHistory.js
import React from 'react';
import { TextField } from '@mui/material';

const EmploymentEducationHistory = ({ formData, setFormData }) => {
  return (
    <div>
      <TextField label="Resume or CV detailing work experience" fullWidth />
      <TextField label="Educational background and qualifications" fullWidth />
      <TextField label="Employment history and references" fullWidth />
    </div>
  );
};

export default EmploymentEducationHistory;
