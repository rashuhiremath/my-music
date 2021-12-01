import Music from "./interfaces/Music"

interface AlbumPageProps {
   music: Music
  }
  
const AlbumPage = ({music}: AlbumPageProps )=>{

    
    return(
        <div>
            <img src={music.album.cover} alt="" />
            <p>{music.album.title}</p>
            <p>{music.album.tracklist}</p>
            <p>{music.duration}</p>
        </div>
    )
}

export default AlbumPage