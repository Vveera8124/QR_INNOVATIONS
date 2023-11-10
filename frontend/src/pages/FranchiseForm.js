// import React, { useState } from 'react';
// import { TextField, Button, Container, Grid } from '@mui/material';

// const FranchiseForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     mobileNumber: '',
//     country: '',
//     region: '',
//     description: '',
//     franchiseReason: '',
//     cvFile: null, // Updated property name for CV file
//   });

//   const handleChange = (field) => (event) => {
//     setFormData({ ...formData, [field]: event.target.value });
//   };

//   const handleFileChange = (event) => {
//     setFormData({ ...formData, cvFile: event.target.files[0] });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add logic to handle form submission, including handling the CV file
//     console.log(formData);
//   };

//   return (
//     <Container>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <form onSubmit={handleSubmit}>
//             <p>Hi, I’m interested in hearing more about becoming a QR-Innovations.com Franchise</p>
//             <p>Please contact me asap.</p>
//             <div>
//               <TextField
//                 label="Full Name"
//                 fullWidth
//                 margin="normal"
//                 value={formData.fullName}
//                 onChange={handleChange('fullName')}
//               />
//               <TextField
//                 label="Email Address"
//                 fullWidth
//                 margin="normal"
//                 value={formData.email}
//                 onChange={handleChange('email')}
//               />
//               <TextField
//                 label="Mobile Number"
//                 fullWidth
//                 margin="normal"
//                 value={formData.mobileNumber}
//                 onChange={handleChange('mobileNumber')}
//               />
//               <TextField
//                 label="Country"
//                 fullWidth
//                 margin="normal"
//                 value={formData.country}
//                 onChange={handleChange('country')}
//               />
//               <TextField
//                 label="Region within Country"
//                 fullWidth
//                 margin="normal"
//                 value={formData.region}
//                 onChange={handleChange('region')}
//               />
//               <TextField
//                 label="Brief Description about Yourself"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 margin="normal"
//                 value={formData.description}
//                 onChange={handleChange('description')}
//               />
//               <TextField
//                 label="Explanation of Interest in Franchise Opportunity"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 margin="normal"
//                 value={formData.franchiseReason}
//                 onChange={handleChange('franchiseReason')}
//               />
//               <TextField
//                 label="Resume/CV (Upload)"
//                 fullWidth
//                 type="file"
//                 accept=".pdf, .doc, .docx"
//                 onChange={handleFileChange}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </div>
//           </form>
//         </Grid>
//         <Grid item xs={6}>
//           {/* French Text */}
//           <div>
//             <p>Bonjour, je souhaite en savoir plus sur la possibilité de devenir franchisé de QR-Innovations.com.</p>
//             <p>Merci de me contacter au plus vite.</p>
//             <div>
//               <TextField
//                 label="Nom et prénom"
//                 fullWidth
//                 margin="normal"
//                 value={formData.fullName}
//                 onChange={handleChange('fullName')}
//               />
//               <TextField
//                 label="Adresse e-mail"
//                 fullWidth
//                 margin="normal"
//                 value={formData.email}
//                 onChange={handleChange('email')}
//               />
//               <TextField
//                 label="Numéro de téléphone portable"
//                 fullWidth
//                 margin="normal"
//                 value={formData.mobileNumber}
//                 onChange={handleChange('mobileNumber')}
//               />
//               <TextField
//                 label="Pays de résidence"
//                 fullWidth
//                 margin="normal"
//                 value={formData.country}
//                 onChange={handleChange('country')}
//               />
//               <TextField
//                 label="Région / Ville"
//                 fullWidth
//                 margin="normal"
//                 value={formData.region}
//                 onChange={handleChange('region')}
//               />
//               <TextField
//                 label="Brève description de vous"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 margin="normal"
//                 value={formData.description}
//                 onChange={handleChange('description')}
//               />
//               <TextField
//                 label="Explication des raisons pour lesquelles vous êtes intéressé par cette opportunité de franchise spécifique"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 margin="normal"
//                 value={formData.franchiseReason}
//                 onChange={handleChange('franchiseReason')}
//               />
//               <TextField
//                 label="Curriculum Vitae (CV) (Télécharger)"
//                 fullWidth
//                 type="file"
//                 accept=".pdf, .doc, .docx"
//                 onChange={handleFileChange}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={12} style={{ textAlign: 'right', marginTop: '20px' }}>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default FranchiseForm;


import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    country: '',
    region: '',
    description: '',
    franchiseReason: '',
    cvFile: null, // Updated property name for CV file
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, cvFile: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission, including handling the CV file
    console.log(formData);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit}>
            <p>Hi, I’m interested in hearing more about becoming a QR-Innovations.com Franchise</p>
            <p>Please contact me asap.</p>
            <div>
              <TextField
                label="Full Name"
                fullWidth
                margin="normal"
                value={formData.fullName}
                onChange={handleChange('fullName')}
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
              <TextField
                label="Brief Description about Yourself"
                fullWidth
                multiline
                rows={6}
                margin="normal"
                value={formData.description}
                onChange={handleChange('description')}
              />
              <TextField
                label="Explanation of Interest in Franchise Opportunity"
                fullWidth
                multiline
                rows={6}
                margin="normal"
                value={formData.franchiseReason}
                onChange={handleChange('franchiseReason')}
              />
              <TextField
                label="Resume/CV (Upload)"
                fullWidth
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </form>
        </Grid>
        <Grid item xs={6}>
          {/* French Text */}
          <div>
            <p>Bonjour, je souhaite en savoir plus sur la possibilité de devenir franchisé de QR-Innovations.com.</p>
            <p>Merci de me contacter au plus vite.</p>
            <div>
              <TextField
                label="Nom et prénom"
                fullWidth
                margin="normal"
                value={formData.fullName}
                onChange={handleChange('fullName')}
              />
              <TextField
                label="Adresse e-mail"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange('email')}
              />
              <TextField
                label="Numéro de téléphone portable"
                fullWidth
                margin="normal"
                value={formData.mobileNumber}
                onChange={handleChange('mobileNumber')}
              />
              <TextField
                label="Pays de résidence"
                fullWidth
                margin="normal"
                value={formData.country}
                onChange={handleChange('country')}
              />
              <TextField
                label="Région / Ville"
                fullWidth
                margin="normal"
                value={formData.region}
                onChange={handleChange('region')}
              />
              <TextField
                label="Brève description de vous"
                fullWidth
                multiline
                rows={6}
                margin="normal"
                value={formData.description}
                onChange={handleChange('description')}
              />
              <TextField
                label="Explication des raisons pour lesquelles vous êtes intéressé par cette opportunité de franchise spécifique"
                fullWidth
                multiline
                rows={6}
                margin="normal"
                value={formData.franchiseReason}
                onChange={handleChange('franchiseReason')}
              />
              <TextField
                label="Curriculum Vitae (CV) (Télécharger)"
                fullWidth
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'right', marginTop: '20px' }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FranchiseForm;

