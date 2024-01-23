import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function RockAlbum() {
  const [data, setData] = useState([])
  const option = {
    method: 'GET',
    url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=rock',
  }
  useEffect(() => {
    axios
      .request(option)
      .then((response) => {
        console.log(response.data.data.slice(0, 4))
        setData(response.data.data.slice(0, 4))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
    <p>ciao</p>
    </>
  )
}
