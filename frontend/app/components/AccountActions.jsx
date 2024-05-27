// Not implemented

import { useState } from "react";

function AccountActions({ onTransaction }) {
  const [amount, setAmount] = useState(0);

  const handleTransaction = () => {
    onTransaction(amount);
  };

  return (
    <div className=" p-10">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
        placeholder="Amount"
      />
      <button onClick={handleTransaction}>Make Transaction</button>
    </div>
  );
}

export default AccountActions;
