// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Grid } from '@mui/material';

// const FrenchFranchiseApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     legalName: '',
//     contactDetails: '',
//     dateOfBirth: '',
//     nationalInsuranceNumber: '',
//     taxReturns: '',
//     creditHistory: '',
//     bankStatements: '',
//     employmentHistory: '',
//     educationDetails: '',
//     businessExperience: '',
//     reasonForFranchise: '',
//     personalReferences: '',
//     legalIssues: '',
//     legalStatus: '',
//     businessPlan: '',
//   });

//   const handleChange = (field) => (e) => {
//     setFormData({ ...formData, [field]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Formulaire de demande de franchise
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           {/* Personal Information */}
//           <Grid item xs={12}>
//             <TextField
//               label="Nom légal complet"
//               fullWidth
//               value={formData.legalName}
//               onChange={handleChange('legalName')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Coordonnées"
//               fullWidth
//               value={formData.contactDetails}
//               onChange={handleChange('contactDetails')}
//             />
//           </Grid>
//           {/* <Grid item xs={12}>
//             <TextField
//               label="Date de naissance"
//               fullWidth
//               value={formData.dateOfBirth}
//               onChange={handleChange('dateOfBirth')}
//             />
//           </Grid> */}
//          <Grid item xs={12}>
//             <DatePicker
//               label="Date de naissance"
//               value={formData.dateOfBirth}
//               onChange={(value) => handleChange('dateOfBirth')(value)}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Numéro d'assurance nationale, passeport, document d'identité"
//               fullWidth
//               value={formData.nationalInsuranceNumber}
//               onChange={handleChange('nationalInsuranceNumber')}
//             />
//           </Grid>

//           {/* Financial Information */}
//           <Grid item xs={12}>
//             <TextField
//               label="Déclarations fiscales des deux dernières années"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.taxReturns}
//               onChange={handleChange('taxReturns')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Antécédents de crédit et cote de crédit"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.creditHistory}
//               onChange={handleChange('creditHistory')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Relevés bancaires des trois derniers mois"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.bankStatements}
//               onChange={handleChange('bankStatements')}
//             />
//           </Grid>

//           {/* Employment and Education History */}
//           <Grid item xs={12}>
//             <TextField
//               label="Curriculum vitae"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.employmentHistory}
//               onChange={handleChange('employmentHistory')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Formation et qualifications"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.educationDetails}
//               onChange={handleChange('educationDetails')}
//             />
//           </Grid>

//           {/* Business Experience */}
//           <Grid item xs={12}>
//             <TextField
//               label="Détails de toute expérience professionnelle antérieure"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.businessExperience}
//               onChange={handleChange('businessExperience')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Explication des raisons pour lesquelles vous êtes intéressé par cette opportunité de franchise spécifique"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.reasonForFranchise}
//               onChange={handleChange('reasonForFranchise')}
//             />
//           </Grid>

//           {/* References */}
//           <Grid item xs={12}>
//             <TextField
//               label="Références personnelles et professionnelles"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.personalReferences}
//               onChange={handleChange('personalReferences')}
//             />
//           </Grid>

//           {/* Legal Information */}
//           <Grid item xs={12}>
//             <TextField
//               label="Tout antécédent de problèmes juridiques, de procédures judiciaires ou de condamnations pénales"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.legalIssues}
//               onChange={handleChange('legalIssues')}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Confirmation du statut juridique et de l'éligibilité à travailler dans le pays"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.legalStatus}
//               onChange={handleChange('legalStatus')}
//             />
//           </Grid>

//           {/* Business Plan */}
//           <Grid item xs={12}>
//             <TextField
//               label="Un plan d'affaires décrivant votre stratégie d'exploitation de la franchise, y compris les plans de marketing, le marché cible et les projections financières"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.businessPlan}
//               onChange={handleChange('businessPlan')}
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" type="submit">
//               Soumettre la demande
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default FrenchFranchiseApplicationForm;


import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const FranchiseApplicationForm = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    contactDetails: '',
    dateOfBirth: '',
    nationalInsuranceNumber: '',
    taxReturns: '',
    creditHistory: '',
    bankStatements: '',
    employmentHistory: '',
    educationDetails: '',
    businessExperience: '',
    reasonForFranchise: '',
    personalReferences: '',
    legalIssues: '',
    legalStatus: '',
    businessPlan: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Formulaire de demande de franchise
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Personal Information */}
          <Grid item xs={12}>
            <TextField
              label="Nom légal complet"
              fullWidth
              value={formData.legalName}
              onChange={handleChange('legalName')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Coordonnées"
              fullWidth
              value={formData.contactDetails}
              onChange={handleChange('contactDetails')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date de naissance"
              fullWidth
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange('dateOfBirth')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Numéro d'assurance nationale, passeport, document d'identité"
              fullWidth
              value={formData.nationalInsuranceNumber}
              onChange={handleChange('nationalInsuranceNumber')}
            />
          </Grid>

          {/* Financial Information */}
          <Grid item xs={12}>
            <TextField
              label="Déclarations fiscales des deux dernières années"
              fullWidth
              multiline
              rows={4}
              value={formData.taxReturns}
              onChange={handleChange('taxReturns')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Antécédents de crédit et cote de crédit"
              fullWidth
              multiline
              rows={4}
              value={formData.creditHistory}
              onChange={handleChange('creditHistory')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Relevés bancaires des trois derniers mois"
              fullWidth
              multiline
              rows={4}
              value={formData.bankStatements}
              onChange={handleChange('bankStatements')}
            />
          </Grid>

          {/* Employment and Education History */}
          <Grid item xs={12}>
            <TextField
              label="Curriculum vitae"
              fullWidth
              multiline
              rows={4}
              value={formData.employmentHistory}
              onChange={handleChange('employmentHistory')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Formation et qualifications"
              fullWidth
              multiline
              rows={4}
              value={formData.educationDetails}
              onChange={handleChange('educationDetails')}
            />
          </Grid>

          {/* Business Experience */}
          <Grid item xs={12}>
            <TextField
              label="Détails de toute expérience professionnelle antérieure"
              fullWidth
              multiline
              rows={4}
              value={formData.businessExperience}
              onChange={handleChange('businessExperience')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Explication des raisons pour lesquelles vous êtes intéressé par cette opportunité de franchise spécifique"
              fullWidth
              multiline
              rows={4}
              value={formData.reasonForFranchise}
              onChange={handleChange('reasonForFranchise')}
            />
          </Grid>

          {/* References */}
          <Grid item xs={12}>
            <TextField
              label="Références personnelles et professionnelles"
              fullWidth
              multiline
              rows={4}
              value={formData.personalReferences}
              onChange={handleChange('personalReferences')}
            />
          </Grid>

          {/* Legal Information */}
          <Grid item xs={12}>
            <TextField
              label="Tout antécédent de problèmes juridiques, de procédures judiciaires ou de condamnations pénales"
              fullWidth
              multiline
              rows={4}
              value={formData.legalIssues}
              onChange={handleChange('legalIssues')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirmation du statut juridique et de l'éligibilité à travailler dans le pays"
              fullWidth
              multiline
              rows={4}
              value={formData.legalStatus}
              onChange={handleChange('legalStatus')}
            />
          </Grid>

          {/* Business Plan */}
          <Grid item xs={12}>
            <TextField
              label="Un plan d'affaires décrivant votre stratégie d'exploitation de la franchise, y compris les plans de marketing, le marché cible et les projections financières"
              fullWidth
              multiline
              rows={4}
              value={formData.businessPlan}
              onChange={handleChange('businessPlan')}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Soumettre la demande
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FranchiseApplicationForm;
