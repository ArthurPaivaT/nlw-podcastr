import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg"></img>
        <div> Tocando Agora {episode?.title}</div>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um PodCast para ouvir</strong>
        </div>
      )}

      <footer className={episode ? "" : styles.empty}>
        <div className={styles.progress}>
          <span>0:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider}> </div>
          </div>
          <span>0:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg"></img>
          </button>
          <button type="button">
            <img src="/play-previous.svg"></img>
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/play.svg"></img>
          </button>
          <button type="button">
            <img src="/play-next.svg"></img>
          </button>
          <button type="button">
            <img src="/repeat.svg"></img>
          </button>
        </div>
      </footer>
    </div>
  );
}
