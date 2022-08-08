import Link from 'next/link';

export const getStaticProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
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
  console.log(contact);
  return (
    <div>
      post lists:
      <ul>
        {contact &&
          contact.map(({ name, id }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Contact;
