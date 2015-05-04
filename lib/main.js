import RedditApi from './reddit-api'
import ExtractGifs from './extract-gifs'
import DisplayGifs from './display-gifs'

RedditApi.load()
    .then(ExtractGifs)
    //.then(urls => console.log(urls))
    .then(DisplayGifs)

export default {}
