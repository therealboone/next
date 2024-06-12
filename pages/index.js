import { gql } from '@apollo/client';
import client from '../lib/apollo';

export default function Home({ posts }) {
  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          nodes {
            id
            title
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
}