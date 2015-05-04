import RedditApi from './reddit-api'
import ExtractGifs from './extract-gifs'

RedditApi.load()
    .then(ExtractGifs)
    .then(urls => console.log(urls))

export default {}
