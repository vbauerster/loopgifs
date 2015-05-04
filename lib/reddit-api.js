import jsonp from 'jsonp'

class RedditApi {
    constructor() {
        this.redditURL = 'http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week'
    }
    load() {
        //console.log('todo')
        jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
            console.log(data);
        })
    }
}

export default new RedditApi()