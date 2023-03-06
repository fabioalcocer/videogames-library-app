import axios from 'axios'

const gamesApi = axios.create({
  baseURL: 'https://api.rawg.io/api/games?key=197ef46d995a4a3ab410d8bb4d6392b6&platforms=15'
})

export const getGames = async () => {
  const res = await gamesApi.get('')
  return res.data
}