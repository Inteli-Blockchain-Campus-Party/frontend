import Head from "next/head";
import Link from "next/link";

const FourOhFour = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>HealthVault</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-[#000] text-white" id="bg">
        <h1 className="text-6xl font-bold">
          404 - This page could not be found
        </h1>

        <p className="mt-3 text-2xl">
          Go back to the{" "}
          <Link href="/" className="text-blue-600 hover:text-blue-500">
            homepage
          </Link>
        </p>
      </main>
    </div>
  );
};

export default FourOhFour;
