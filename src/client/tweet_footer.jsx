import React from 'react';

class TweetFooter extends React.Component {
    render(){
        const favouriteCount = this.props.favouriteCount
        const retweetCount = this.props.retweetCount
        return (
            <div>
                <div>retweets: {retweetCount}</div>
                <div>favourites: {favouriteCount}</div>
            </div>
        )

    }
}

export default TweetFooter