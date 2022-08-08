import PostInfo from '../../components/PostInfo';

export const getStaticPaths = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await resp.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data,
    },
  };
};

const Post = ({ posts }) => {
  return (
    <div>
      <PostInfo posts={posts} />
    </div>
  );
};
export default Post;
