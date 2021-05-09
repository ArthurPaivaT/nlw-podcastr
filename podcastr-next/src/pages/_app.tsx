import "../styles/global.scss";
import Header from "../components/header";
import Player from "../components/player";
import { PlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <div className={styles.wrapper}>
      <PlayerContext.Provider
        value={{ episodeList, currentEpisodeIndex, play }}
      >
        <main>
          <Header></Header>
          <Component {...pageProps} />
        </main>
        <Player></Player>
      </PlayerContext.Provider>
    </div>
  );
}

export default MyApp;
