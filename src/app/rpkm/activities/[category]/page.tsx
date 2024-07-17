import data from '@/data/activities.json';

export const getStaticPaths = async () => {
  const paths = Object.keys(data).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};

const page = () => {
  return <section></section>;
};

export default page;
