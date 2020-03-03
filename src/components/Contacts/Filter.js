import React from 'react';

function Filter({ onSubmit }) {
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [showActive, setShowActive] = React.useState(false);

  const handleSubmit = () => (
    onSubmit({
      name, city, showActive
    })
  );

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
      <input type="checkbox" checked={showActive} onChange={e=> setShowActive(e.target.checked)} />
      <button onClick={handleSubmit}>Filter</button>
    </div>
  );
}

export default Filter;
