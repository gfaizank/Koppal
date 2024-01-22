import ProfileCards from "./Profile-Cards";
import { useState } from "react";
function App() {
  const initialProfiles = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      number: "555-1234",
      website: "http://johndoe.com",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      number: "555-5678",
      website: "http://janesmith.com",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      number: "555-9876",
      website: "http://alicejohnson.com",
    },
    {
      name: "Bob Williams",
      email: "bob.williams@example.com",
      number: "555-4567",
      website: "http://bobwilliams.com",
    },
    {
      name: "Eva Davis",
      email: "eva.davis@example.com",
      number: "555-8765",
      website: "http://evadavis.com",
    },
    {
      name: "David Taylor",
      email: "david.taylor@example.com",
      number: "555-2345",
      website: "http://davidtaylor.com",
    },
    {
      name: "Sara Miller",
      email: "sara.miller@example.com",
      number: "555-7890",
      website: "http://saramiller.com",
    },
    {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      number: "555-3456",
      website: "http://michaelwilson.com",
    },
    {
      name: "Olivia Brown",
      email: "olivia.brown@example.com",
      number: "555-9012",
      website: "http://oliviabrown.com",
    },
    {
      name: "Daniel Lee",
      email: "daniel.lee@example.com",
      number: "555-6789",
      website: "http://daniellee.com",
    },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);

  const handleDelete = (profileToDelete) => {
    const updatedProfiles = profiles.filter((profile) => profile !== profileToDelete);
    setProfiles(updatedProfiles);
  };

  const handleUpdate = (updatedData) => {
    const index = profiles.findIndex((profile) => profile.name === updatedData.name);
    const updatedProfile = { ...profiles[index], ...updatedData };
    const updatedProfiles = [...profiles];
    updatedProfiles[index] = updatedProfile;

    setProfiles(updatedProfiles);
  };

  return (
    <div className="lg:flex lg:flex-wrap">
      {profiles.map((profile, index) => (
        <ProfileCards key={index} profile={profile} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}

export default App;
