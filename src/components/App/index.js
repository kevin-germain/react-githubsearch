// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Loader from 'src/components/Loader';
import Menu from 'src/components/Menu';
import FAQ from 'src/components/FAQ';
import NotFound from 'src/components/NotFound';
import LoadMore from 'src/components/LoadMore';
import './style.scss';

function getCleanData(data) {
  return data.map((item) => ({
    id: item.id,
    imageUrl: item.owner.avatar_url,
    title: item.full_name,
    owner: item.owner.login,
    description: item.description ? item.description : 'No description available',
    repoUrl: item.html_url,
  }));
}

// == Composant
function App() {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);

  const loadRepos = () => {
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${request}&sort=stars&order=desc&page=${page}&per_page=9`)
      .then((response) => {
        const cleanData = getCleanData(response.data.items);

        setResults([
          ...results,
          ...cleanData,
        ]);

        setMessage(`la recherche a donné ${response.data.total_count} résultats`);
        setMessageVisible(true);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const setNewRequest = () => {
    setResults([]);
    setPage(1);
    setRequest(searchValue);
  };

  useEffect(() => {
    if (request !== '') {
      loadRepos();
    }
  }, [request, page]);

  return (
    <div className="app">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact>
          <SearchBar
            inputValue={searchValue}
            onChangeInputValue={setSearchValue}
            onFormSubmit={setNewRequest}
          />
          <Message
            message={message}
            visible={messageVisible}
            onTimeout={() => setMessageVisible(false)}
          />
          <ReposResults results={results} />
          {loading && <Loader />}
          {results.length > 0 && (
            <LoadMore onClickButton={() => setPage(page + 1)} />
          )}
        </Route>
        <Route path="/faq"><FAQ /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

// == Export
export default App;
