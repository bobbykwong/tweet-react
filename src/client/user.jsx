import React from 'react';

class User extends React.Component {
    render(){
        const userDetails = this.props.user
        const username = userDetails.screen_name
        const name = userDetails.name
        const profilePicURL = userDetails.profile_image_url_https
        const profilePic = <img src={profilePicURL} />

        return (
            <div>
                {profilePic}
                <p>{name}</p>
                <p>@{username}</p>

            </div>
        )

    }
}

export default User