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

  return <div>{data?.message}</div>;
};

export default IndexPage;
