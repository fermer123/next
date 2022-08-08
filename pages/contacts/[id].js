import ContactInfo from '../../components/ContactInfo';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      contact: data,
    },
  };
};

const Contact = ({ contact }) => {
  return (
    <div>
      <ContactInfo contact={contact} />
    </div>
  );
};
export default Contact;
