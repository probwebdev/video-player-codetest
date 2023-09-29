import { useRef, useEffect } from 'react';

import styles from './video.module.css';

export interface VideoProps {
  src: string;
  poster?: string;
}

export const Video = ({ src, poster }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (src.length > 0) {
      videoRef.current?.load();
    }
  }, [src]);

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        className={styles.player}
        controls
        autoPlay
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
