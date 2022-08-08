const PostInfo = ({ posts }) => {
  const { id, body } = posts || {};

  return (
    <div>
      <div>Name: {id}</div>
      <div>Body: {body}</div>
    </div>
  );
};
export default PostInfo;
