import React from 'react';
import FranchiseForm from './pages/FranchiseForm';
import FranchiseApplicationForm from './pages/FranchiseApplicationForm';
import FrenchFranchiseApplicationForm from './pages/FrenchFranchiseApplicationForm';
import CharityForm from './pages/CharityForm';
import ContactUsForm from './pages/ContactUsForm';




function App() {
  return (
    <div className="App">
        <h1>Franchise form</h1>
      <FranchiseForm />
      <FranchiseApplicationForm />
      <FrenchFranchiseApplicationForm/>
      <CharityForm/>
      <ContactUsForm/>
      
    </div>
  );
}

export default App;




