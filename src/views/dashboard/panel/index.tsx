import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    console.log('dash');
  }, []);
  return (
    <div>
      <h2>Dashboard Index</h2>
    </div>
  );
}
