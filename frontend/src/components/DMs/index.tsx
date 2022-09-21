import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';

function DMs() {
  const outlet = useOutlet();
  console.log(outlet)

  return (
    <main className="flex flex--column">
      {outlet || <Navigate to="/rooms/@me/friends" />}
    </main>
  );
}

export default DMs;
