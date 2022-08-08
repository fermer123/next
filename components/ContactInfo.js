const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};

  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
    </div>
  );
};
export default ContactInfo;
