import Socials from '../components/Socials';

export const getStaticProps = async () => {
  const resp = await fetch(`http://localhost:3000/api/socials/`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socials: data,
    },
  };
};

const Home = ({ socials }) => {
  return (
    <div>
      Home
      <Socials socials={socials} />
    </div>
  );
};
export default Home;
