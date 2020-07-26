import React from 'react';

import './UserInfo.css';


class UserInfo extends React.Component {



    render() {

        return (
            <div className = 'userinfo'>
                <div>
                    <figure>{this.props.userName}
                        <figcaption>{this.props.username}</figcaption>
                    </figure>
                </div>
            </div>
        )
    }

}


export default UserInfo;