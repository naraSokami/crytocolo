import { useState } from 'react';

function PageGetTokens() {
  const [number, setNumber] = useState('');

  function handleChange(event) {
    setNumber(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          <p>Amount of ETH to invest:</p>
          <input type="text" value={number} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default PageGetTokens;