import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import MainPart from './components/MainPart';
import Navbar from './components/Navbar';

function App() {
  const [amount, setAmount] = useState(0);
  const handleAmount = (val) => {
    setAmount(val + amount);
  };
  return (
    <div>
      <Navbar amount={amount} />
      <Hero handleAmount={handleAmount} />
      <MainPart amount={amount} handleAmount={handleAmount} />
    </div>
  );
}

export default App;
