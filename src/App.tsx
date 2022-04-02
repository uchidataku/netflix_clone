import React from 'react';
import './App.css';
import {Row} from "./components/Row";
import {Banner} from "./components/Banner";
import {requests} from "./request";
import {Nav} from "./components/Nav";

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />
        <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.feachNetflixOriginals}
            isLargeRow
        />
        <Row title="Top Rated" fetchUrl={requests.feachTopRated} />
        <Row title="Action Movies" fetchUrl={requests.feachActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.feachComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.feachHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.feachRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.feachDocumentMovies} />
    </div>
  );
}

export default App;
