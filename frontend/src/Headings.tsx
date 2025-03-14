import React from 'react';

const Heading: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 text-center">
      <h1 className="text-3xl font-bold">Bowling League - Marlins & Sharks</h1>
      <p className="text-lg">
        A list of bowlers from the Marlins and Sharks teams
      </p>
    </header>
  );
};

export default Heading;
