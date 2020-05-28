import React from 'react';

class Body extends React.Component {
    render(){
        const entities = this.props.entities

        let image;
        if ('media' in entities ) {
            const imageURL = entities.media[0].media_url_https
            image = <img src={imageURL} style={{maxheight: "100px"}, {maxWidth:  "100px"}}/>
        }

        return (
            <div>
                <p>{this.props.body}</p>
                {image}
            </div>
        )

    }
}

export default Body