import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SpotifySearch() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: 'like',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '2a166ebd99msh6dd2def7df73371p163987jsnf07824a0a36d',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.tracks);
} catch (error) {
	console.error(error);
}
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once, similar to componentDidMount

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{result}</pre>
      )}
    </div>
  );
}

export default SpotifySearch;
