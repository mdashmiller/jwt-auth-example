import React from 'react'
import { useAuthorizedQuery } from '../generated/graphql'

export const Authorized: React.FC = () => {
  // const { data, loading,  error } = useAuthorizedQuery({ fetchPolicy: "network-only" })
  const { data, loading,  error } = useAuthorizedQuery()

  if (loading) return <div>Loading...</div>

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }

  if (!data) return <div>No data</div>

  return <div>{data.authorized}</div>
}
