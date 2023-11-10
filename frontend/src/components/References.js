// components/References.js
import React from 'react';
import { TextField } from '@mui/material';

const References = ({ formData, setFormData }) => {
  return (
    <div>
      <TextField label="Personal and professional references who can vouch for your character and qualifications" fullWidth />
    </div>
  );
};

export default References;
