import { type TV4PanelItem } from '@tv4/api';

import styles from './showcase-panel.module.css';
import { Poster } from '~/components/Poster';
import { Tooltip } from '~/components/Tooltip';

export interface ShowcasePanelProps {
  title: string;
  movies: TV4PanelItem[];
  onMovieSelected: (src: string) => void;
}

export const ShowcasePanel = ({
  title,
  movies,
  onMovieSelected,
}: ShowcasePanelProps) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <ul key={title} className={styles.list}>
        {movies.map(({ id, title, description, image, video }) => (
          <Tooltip key={id} text={description}>
            {/* eslint-disable */}
            <li
              tabIndex={0}
              onClick={() => {
                onMovieSelected(video);
              }}
            >
              <Poster title={title} description={description} image={image} />
            </li>
            {/* eslint-enable */}
          </Tooltip>
        ))}
      </ul>
    </section>
  );
};
