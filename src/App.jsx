import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import MainPart from './components/MainPart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';

function App() {
  const [amount, setAmount] = useState(0);
  const handleAmount = (val) => {
    setAmount(val + amount);
  };
  const handleAmountDec = (val) => {
    setAmount(amount - val);
  };
  return (
    <div>
      <Navbar amount={amount} />
      <Hero handleAmount={handleAmount} />
      <MainPart amount={amount} handleAmountDec={handleAmountDec} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
