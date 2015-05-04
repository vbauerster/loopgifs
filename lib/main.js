import RedditApi from './reddit-api'

RedditApi.load().then(posts => console.log(posts))

export default {}
