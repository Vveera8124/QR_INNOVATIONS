import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    // English Fields
    fullName: '',
    email: '',
    mobileNumber: '',
    country: '',
    region: '',
    briefDescription: '',
    franchiseInterestExplanation: '',
    resumeCV: '',
    // Contact Details
    address: '',
    emailAddress: '',
    ttntTelNumber: '',
    vovarooRecording: '',
    // French Fields
    fullNameFr: '',
    emailFr: '',
    mobileNumberFr: '',
    countryFr: '',
    regionFr: '',
    briefDescriptionFr: '',
    franchiseInterestExplanationFr: '',
    resumeCVFr: '',
    // Coordonnées de la personne à contacter
    addressFr: '',
    emailAddressFr: '',
    ttntTelNumberFr: '',
    vovarooRecordingFr: '',
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
            <TextField label="Full Name" fullWidth margin="normal" value={formData.fullName} onChange={handleChange('fullName')} />
            <TextField label="Email Address" fullWidth margin="normal" value={formData.email} onChange={handleChange('email')} />
            <TextField label="Mobile Number" fullWidth margin="normal" value={formData.mobileNumber} onChange={handleChange('mobileNumber')} />
            <TextField label="Country" fullWidth margin="normal" value={formData.country} onChange={handleChange('country')} />
            <TextField label="Region within Country" fullWidth margin="normal" value={formData.region} onChange={handleChange('region')} />
            <TextField label="Brief Description about yourself" fullWidth multiline rows={3} margin="normal" value={formData.briefDescription} onChange={handleChange('briefDescription')} />
            <TextField
              label="Explanation of why you are interested in this specific franchise opportunity"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={formData.franchiseInterestExplanation}
              onChange={handleChange('franchiseInterestExplanation')}
            />
            <TextField label="Resume or CV detailing work experience" fullWidth multiline rows={3} margin="normal" value={formData.resumeCV} onChange={handleChange('resumeCV')} />
          </Grid>
          {/* Contact Details */}
          <Grid item xs={6}>
            <TextField label="Address" fullWidth margin="normal" value={formData.address} onChange={handleChange('address')} />
            <TextField label="Email Address" fullWidth margin="normal" value={formData.emailAddress} onChange={handleChange('emailAddress')} />
            <TextField label="TTNT Tel Number" fullWidth margin="normal" value={formData.ttntTelNumber} onChange={handleChange('ttntTelNumber')} />
            <TextField
              label="VOVAROO Voicemail Recording button (with name and email)"
              fullWidth
              margin="normal"
              value={formData.vovarooRecording}
              onChange={handleChange('vovarooRecording')}
            />
          </Grid>
          {/* French Fields */}
          <Grid item xs={6}>
            {/* French Fields */}
            <TextField label="Nom et prénom" fullWidth margin="normal" value={formData.fullNameFr} onChange={handleChange('fullNameFr')} />
            <TextField label="Adresse e-mail" fullWidth margin="normal" value={formData.emailFr} onChange={handleChange('emailFr')} />
            <TextField label="Numéro de téléphone portable" fullWidth margin="normal" value={formData.mobileNumberFr} onChange={handleChange('mobileNumberFr')} />
            <TextField label="Pays" fullWidth margin="normal" value={formData.countryFr} onChange={handleChange('countryFr')} />
            <TextField label="Région / Ville" fullWidth margin="normal" value={formData.regionFr} onChange={handleChange('regionFr')} />
            <TextField label="Brève description de vous" fullWidth multiline rows={3} margin="normal" value={formData.briefDescriptionFr} onChange={handleChange('briefDescriptionFr')} />
            <TextField
              label="Explication des raisons pour lesquelles vous êtes intéressé par cette opportunité de franchise spécifique"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={formData.franchiseInterestExplanationFr}
              onChange={handleChange('franchiseInterestExplanationFr')}
            />
            <TextField label="CV détaillant vos expériences professionnelles" fullWidth multiline rows={3} margin="normal" value={formData.resumeCVFr} onChange={handleChange('resumeCVFr')} />
          </Grid>
          {/* Coordonnées de la personne à contacter */}
          <Grid item xs={6}>
            <TextField label="Adresse" fullWidth margin="normal" value={formData.addressFr} onChange={handleChange('addressFr')} />
            <TextField label="Adresse e-mail" fullWidth margin="normal" value={formData.emailAddressFr} onChange={handleChange('emailAddressFr')} />
            <TextField label="Numéro de téléphone TTNT" fullWidth margin="normal" value={formData.ttntTelNumberFr} onChange={handleChange('ttntTelNumberFr')} />
            <TextField
              label="VOVAROO Bouton d'enregistrement de la messagerie vocale (avec le nom et l’adresse e-mail)"
              fullWidth
              margin="normal"
              value={formData.vovarooRecordingFr}
              onChange={handleChange('vovarooRecordingFr')}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactUsForm;
