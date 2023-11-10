// FranchiseApplicationForm.js
import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import PersonalInformation from '../components/PersonalInformation';
import FinancialInformation from '../components/FinancialInformation';
import EmploymentEducationHistory from '../components/EmploymentEducationHistory';
import BusinessExperience from '../components/BusinessExperience';
import References from '../components/References';
import LegalRegulatoryInformation from '../components/LegalRegulatoryInformation';
// import BusinessPlan from '../components/BusinessPlan';
import { TextField } from '@mui/material';

const FranchiseApplicationForm = () => {
  const [formData, setFormData] = useState({
    personalInformation: {},
    financialInformation: {},
    employmentEducationHistory: {},
    businessExperience: {},
    references: {},
    legalRegulatoryInformation: {},
    businessPlan: {},
  });
  const BusinessPlan = ({ formData, setFormData }) => {
    return (
      <div>
        <TextField label="A business plan outlining your strategy for running the franchise, including marketing plans, target market, and financial projections" fullWidth />
      </div>
    );
  };
  
  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Franchisee Application Form
      </Typography>
      <PersonalInformation  />
      <FinancialInformation />
      <EmploymentEducationHistory  />
      <BusinessExperience  />
      <References  />
      <LegalRegulatoryInformation />
      <BusinessPlan />
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Grid>
    </Container>
    </>
  );
};

export default FranchiseApplicationForm;

