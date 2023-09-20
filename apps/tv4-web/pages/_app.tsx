import '~/css/core.css';

import { trpc } from '~/utils/trpc';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main>
    <Component {...pageProps} />
  </main>
);

export default trpc.withTRPC(MyApp);
