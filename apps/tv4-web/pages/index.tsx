import { Poster } from '~/components/Poster';
import { trpc } from '~/utils/trpc';

const IndexPage = () => {
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
      {data?.panels.map(({ title, items }) => (
        <section key={title} className="showcase-section">
          <h2>{title}</h2>
          <ul key={title} className="list">
            {items.map(({ id, title, description, image, video }) => (
              <li key={id}>
                <Poster title={title} description={description} image={image} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default IndexPage;
