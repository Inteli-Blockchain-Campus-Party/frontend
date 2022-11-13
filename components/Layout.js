import Head from "next/head";

export const Layout = ({ children, title, props }) => (
  <div>
    <Head>
      <title>{title ? title + " - HealthVault" : "HealthVault"}</title>
    </Head>

    {children}
  </div>
);