import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

const CharityForm = () => {
  const [formData, setFormData] = useState({
    // English Fields
    charityName: '',
    areaOfWork: '',
    charityNumber: '',
    executiveDirector: '',
    contactFullName: '',
    email: '',
    mobileNumber: '',
    country: '',
    region: '',
    charityDescription: '',
    collaborationExplanation: '',
    // French Fields
    charityNameFr: '',
    areaOfWorkFr: '',
    charityNumberFr: '',
    executiveDirectorFr: '',
    contactFullNameFr: '',
    emailFr: '',
    mobileNumberFr: '',
    countryFr: '',
    regionFr: '',
    charityDescriptionFr: '',
    collaborationExplanationFr: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* English Fields */}
          <Grid item xs={6}>
            <TextField
              label="Name of Charity"
              fullWidth
              margin="normal"
              value={formData.charityName}
              onChange={handleChange('charityName')}
            />
            <TextField
              label="Area of Charitable Work"
              fullWidth
              margin="normal"
              value={formData.areaOfWork}
              onChange={handleChange('areaOfWork')}
            />
            <TextField
              label="Registered Charity Number"
              fullWidth
              margin="normal"
              value={formData.charityNumber}
              onChange={handleChange('charityNumber')}
            />
            <TextField
              label="Name of Executive Director"
              fullWidth
              margin="normal"
              value={formData.executiveDirector}
              onChange={handleChange('executiveDirector')}
            />
            <TextField
              label="Full Name of Contact"
              fullWidth
              margin="normal"
              value={formData.contactFullName}
              onChange={handleChange('contactFullName')}
            />
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange('email')}
            />
            <TextField
              label="Mobile Number"
              fullWidth
              margin="normal"
              value={formData.mobileNumber}
              onChange={handleChange('mobileNumber')}
            />
            <TextField
              label="Country"
              fullWidth
              margin="normal"
              value={formData.country}
              onChange={handleChange('country')}
            />
            <TextField
              label="Region within Country"
              fullWidth
              margin="normal"
              value={formData.region}
              onChange={handleChange('region')}
            />
          </Grid>
          {/* French Fields */}
          <Grid item xs={6}>
            <TextField
              label="Nom de l'organisme caritatif"
              fullWidth
              margin="normal"
              value={formData.charityNameFr}
              onChange={handleChange('charityNameFr')}
            />
            <TextField
              label="Domaine d'intervention"
              fullWidth
              margin="normal"
              value={formData.areaOfWorkFr}
              onChange={handleChange('areaOfWorkFr')}
            />
            <TextField
              label="Numéro d'enregistrement de l'organisme caritatif"
              fullWidth
              margin="normal"
              value={formData.charityNumberFr}
              onChange={handleChange('charityNumberFr')}
            />
            <TextField
              label="Nom de la personne en charge de la direction"
              fullWidth
              margin="normal"
              value={formData.executiveDirectorFr}
              onChange={handleChange('executiveDirectorFr')}
            />
            <TextField
              label="Nom complet de la personne à contacter"
              fullWidth
              margin="normal"
              value={formData.contactFullNameFr}
              onChange={handleChange('contactFullNameFr')}
            />
            <TextField
              label="Adresse e-mail"
              fullWidth
              margin="normal"
              value={formData.emailFr}
              onChange={handleChange('emailFr')}
            />
            <TextField
              label="Numéro de téléphone"
              fullWidth
              margin="normal"
              value={formData.mobileNumberFr}
              onChange={handleChange('mobileNumberFr')}
            />
            <TextField
              label="Pays"
              fullWidth
              margin="normal"
              value={formData.countryFr}
              onChange={handleChange('countryFr')}
            />
            <TextField
              label="Région / Ville"
              fullWidth
              margin="normal"
              value={formData.regionFr}
              onChange={handleChange('regionFr')}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Shared Fields */}
            <TextField
              label="Brief Description about your charity"
              fullWidth
              multiline
              rows={6}
              margin="normal"
              value={formData.charityDescription}
              onChange={handleChange('charityDescription')}
            />
            <TextField
              label="Explanation of how you see QR-Innovation collaborating with you"
              fullWidth
              multiline
              rows={6}
              margin="normal"
              value={formData.collaborationExplanation}
              onChange={handleChange('collaborationExplanation')}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right', marginTop: '20px' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CharityForm;
