import React from 'react';
import './Player.css';

const Player = ({ currentTrack, newPlaylist }) => {
  return (
    <div className={styles.player}>
      {currentTrack && (
        <iframe
          src={`https://open.spotify.com/embed/track/${currentTrack}`}
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
      {newPlaylist && (
        <iframe
          title="Spotify Embed: Recommendation Playlist"
          src={`https://open.spotify.com/embed/playlist/${newPlaylist}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: '360px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Player;