import { useState } from 'react';

import { Video } from '~/components/Video';
import { ShowcasePanel } from '~/containers/ShowcasePanel';
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
        <ShowcasePanel
          key={title}
          title={title}
          movies={items}
          onMovieSelected={(src) => {
            setCurrentMovie(src);
          }}
        />
      ))}
    </div>
  );
};

export default IndexPage;
