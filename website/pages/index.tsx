import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Home({ users }) {
  return (
    <div className="container">
      <Head>
        <title>Angus (Hsu Shen) Lee</title>
      </Head>

      <main>
      <h1>
      Hello world!
        </h1>
        <h1 >please see users below</h1>
        <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h2>{user.username}</h2>
            <h3>{user.password}</h3>
            <div>{user._id}</div>
          </li>
        ))}
      </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("next");
  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
