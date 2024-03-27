import Head from "next/head";

const OpenGraphMetaTags = ({ title, description, imageUrl }) => {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" /> {/* Adjust as needed */}
      <meta property="og:image:height" content="630" /> {/* Adjust as needed */}
    </Head>
  );
};

export default OpenGraphMetaTags;
