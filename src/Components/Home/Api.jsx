import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './Api.css';

const API_URL = 'https://api.publicapis.org/entries';

const Api = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setApiData(response.data.entries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <Router>
      <div>
        <h1  className='random'>Why Eloit Global School ?</h1>
        <ul className="description">
          {apiData.map((entry) => (
            <ul key={entry.Description} className="description">
              
                {entry.Description}
              
            </ul>
          ))}
        </ul>

        {selectedEntry && (
          <Route path={`/${selectedEntry.Description}`}>
            
          </Route>
        )}
      </div>
    </Router>
  );
};

export default Api;
