'use client';
import styles from "./page.module.css"
import { useQuery, gql } from '@apollo/client'

const GET_BOOKS = gql`
  query getBooks {
    books {
      id
      title
      author {
        id
        name
      }
    }
  }
`;

const Home = () => {

  const { loading, error, data } = useQuery(GET_BOOKS)
  console.log({ loading, error, data })
  return (
    <div>
      <h1>Dummy react app</h1>
    </div>
  )
}

export default Home
