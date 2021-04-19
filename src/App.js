import React, {useState, useEffect} from 'react';
import QuoteCard from './components/QuoteCard.js';
import axios from "axios";
import './App.css';

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const getQuote = () => {
    axios
    .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    .then((response) => response.data)
    .then((quoteList) => setQuoteList(quoteList[0]));
};

useEffect(() => {
  getQuote();
}, []);
    

  return (
    <div className="App">
      <div>
      <button type="button" onClick={() => getQuote()}>
        Change quote
      </button>
      <QuoteCard quote={quoteList.quote} character={quoteList.character} image={quoteList.image} />
    </div>
    </div>
  );
};



export default App;
