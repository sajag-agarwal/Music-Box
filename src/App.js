import React, { useState } from "react";
import "./styles.css";

var genresDict = {
  Pop: [
    {
      album: "1989",
      artist: "Taylor Swift",
      rating: "4.5/5",
      spotify: "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j"
    },
    {
      album: "Rare",
      artist: "Selena Gomez",
      rating: "4/5",
      spotify: "https://open.spotify.com/album/5obQ9rPASQW2mLxYM8Ko6Z"
    }
  ],
  "R&B": [
    {
      album: "Over It",
      artist: "Summer Walker",
      rating: "4.5/5",
      spotify:
        "https://open.spotify.com/album/1qgJNWnPIeK9rx7hF8JCPK?si=xbvFhgTST1yX5PnGbQLOUA"
    },
    {
      album: "Beauty Behind The Madness",
      artist: "The Weeknd",
      rating: "4.5/5",
      spotify: "https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s"
    }
  ],
  Alternative: [
    {
      album: "Melodrama",
      artist: "Lorde",
      rating: "5/5",
      spotify: "https://open.spotify.com/album/2B87zXm9bOWvAJdkJBTpzF"
    },
    {
      album: "Norman Rockwell",
      artist: "Lana Del Rey",
      rating: "4/5",
      spotify:
        "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A?si=Nq9yG_7wSeyGo2BM8Yq3Fw"
    }
  ],
  Country: [
    {
      album: "Speak Now",
      artist: "Taylor Swift",
      rating: "4/5",
      spotify: "https://open.spotify.com/album/6Ar2o9KCqcyYF9J0aQP3au"
    },
    {
      album: "Red",
      artist: "Taylor Swift",
      rating: "4.5/5",
      spotify: "https://open.spotify.com/album/1KVKqWeRuXsJDLTW0VuD29"
    }
  ]
};

var genresList = Object.keys(genresDict);
export default function App() {
  var [userInput, setUserInput] = useState("Pop");
  function genreDisplayHandler(item) {
    setUserInput(item);
    console.log(item);
  }
  return (
    <div className="App">
      <h1>Music Box</h1>
      <div className="dis">Choose the genre you want recommendations for!</div>
      {genresList.map(function (item) {
        return (
          <span key={item} onClick={() => genreDisplayHandler(item)}>
            <button>{item}</button>
          </span>
        );
      })}
      ;
      <div className="disAlb">
        <div className="dis">
          Now showing the recommendations for <span>{userInput}</span>!
        </div>
        <ul>
          {genresDict[userInput].map(function (item) {
            return (
              <li key={item.album}>
                <div className="da">{item.album} </div>
                <div className="da">{item.artist} </div>
                <div className="da">{item.rating} </div>
                <div>
                  <a href={item.spotify}>
                    <img src="/2111624.svg" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
