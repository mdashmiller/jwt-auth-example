import React from 'react'
import { useAuthorizedQuery } from '../generated/graphql'

interface Props {

}

export const Authorized: React.FC<Props> = () => {
  const { data, loading,  error } = useAuthorizedQuery()

  if (loading) return <div>Loading...</div>

  if (error) {
    console.log(error)
    return <div>Error!</div>
  }

  if (!data) return <div>No data</div>

  return <div>{data.authorized}</div>
}
