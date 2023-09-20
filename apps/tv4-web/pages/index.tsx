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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return <div>{data?.panels[0].title}</div>;
};

export default IndexPage;
