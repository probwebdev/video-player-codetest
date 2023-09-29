import Image, { type ImageProps } from 'next/image';

import styles from './poster.module.css';

import type { TV4PanelItem } from '@tv4/api';

export interface PosterProps extends Omit<TV4PanelItem, 'id' | 'video'> {
  width?: ImageProps['width'];
  height?: ImageProps['height'];
}

export const Poster = ({
  title,
  image,
  description,
  width = 200,
  height = 300,
}: PosterProps) => {
  return (
    <div className={styles.container}>
      <picture className={styles.picture}>
        <Image src={image} alt={description} width={width} height={height} />
      </picture>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
