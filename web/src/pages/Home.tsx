import React from 'react'
import { useUsersQuery } from '../generated/graphql'

interface Props {

}

export const Home: React.FC<Props> = () => {
  // won't read from cache but makes a req to server each time
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' }) 

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h2>users:</h2>
      <ul>
        {data.users.map(user => {
          return (
            <li key={user.id}>
              {user.email}
            </li>
          ) 
        })}
      </ul>
    </div>
  )
}
