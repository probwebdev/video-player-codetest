import { useState } from 'react';

import { Poster } from '~/components/Poster';
import { Tooltip } from '~/components/Tooltip';
import { Video } from '~/components/Video';
import { trpc } from '~/utils/trpc';

const IndexPage = () => {
  const [currentMovie, setCurrentMovie] = useState<string | undefined>(
    undefined
  );
  const { data, error } = trpc.tv4.showcase.useQuery();

  if (error?.message) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="showcase">
      <Video src={currentMovie ?? ''} />
      {data?.panels.map(({ title, items }) => (
        <section key={title} className="showcase-section">
          <h2>{title}</h2>
          <ul key={title} className="list">
            {items.map(({ id, title, description, image, video }) => (
              <Tooltip key={id} text={description}>
                {/* eslint-disable */}
                <li
                  tabIndex={0}
                  onClick={() => {
                    setCurrentMovie(video);
                  }}
                >
                  <Poster
                    title={title}
                    description={description}
                    image={image}
                  />
                </li>
                {/* eslint-enable */}
              </Tooltip>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default IndexPage;
