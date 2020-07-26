import React from 'react';
import Spotify from '../../util/Spotify';
import './PlaylistList.css';
import PlaylistListItem from '../PlaylistListItem/PlaylistListItem';




class PlaylistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: [],
            username: '',
            profileImage: ''
        }
    }
    async componentDidMount () {
        const playlistList = this.state.playlists;
        const playlists = await Spotify.getUserPlaylists()

        // playlistList.push(
            
        //         playlistId: test.id,
        //         playlistName: test.name
            
        // )
        for (let i=0; i< playlists.length ; i++){
            playlistList.push({
                name: playlists[i].name,
                id: playlists[i].id
            })

        }
        


        let userDetails = Spotify.getUserDetails();

        let profileImage = userDetails.images[0].url;
        if(userDetails.images.length === 0) {
            return (        
                this.setState({playlists: playlistList,
                username:userDetails.id}
                ));
        } else {

            return (
                this.setState({playlists: playlistList,
                    username:userDetails.id,
                    profileImage: profileImage}
                    )
            )
        }
  
    }
    // async componentDidUpdate () {
    //     const playlistList =this.state.playlists;
    //     const test = await Spotify.getUserPlaylists()
    //     for (let i=0; i< test.length ; i++){
    //         playlistList.push({
    //             name: test[i].name,
    //             id: test[i].id
    //         })

    //     }
    //     return (
    //         this.setState({playlists: playlistList})
    //     )
    // }

    render() {

        return (
            <div className= 'playlistList' >
                <div className = 'heading'>
                
                    <h2>{this.state.username}'s Playlists</h2>
                    <figure className = 'userImage'><img src={this.state.profileImage} alt='user profile'/></figure>
                </div>
                {this.state.playlists.map(playlist =>{
                    return <PlaylistListItem name = {playlist.name}
                    key = {playlist.id}
                    id = {playlist.id} 
                    onClick = {this.props.onClick}
                    playlistName = {this.props.playlistName}/>
                    })
                }
                
                

            </div>

        )
    }
}

export default PlaylistList;