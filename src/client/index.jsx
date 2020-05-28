import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'
import User from 'user'
import Body from 'body'
import TweetFooter from 'tweet_footer'

class App extends React.Component {
  render() {
    console.log(tweets.tweets[1])

    let  allTweets = tweets.tweets.map((el) => {
        const user = el.user
        const body = el.text
        const entities = el.entities
        const favouriteCount = el.favorite_count
        const retweetCount = el.retweet_count

        return (
            <div>
                <User user={user}/>
                <Body body={body} entities={entities}/>
                <TweetFooter favouriteCount={favouriteCount} retweetCount={retweetCount} />
            </div>
            )
    })

    return (
      <div>
        {allTweets}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");