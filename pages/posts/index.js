import Link from 'next/link';

export const getStaticProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
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

const Posts = ({ posts }) => {
  return (
    <div>
      post lists:
      <ul>
        {posts &&
          posts.map(({ title, id }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Posts;
