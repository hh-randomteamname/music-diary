import MusicList from './MusicList';
import Header from './Header';
import Spotify from './spotify';
import SongDiaryBody from './song-diary/SongDiaryBody';

function App() {
  var extension = window.location.href.split('#')[1]
  if (extension == 'music-list') {
    return (
      <>
        <Header />
        <Spotify />
        <SongDiaryBody />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Spotify />
        <p>{window.location.href}</p>
      </>
    );
  }
}

export default App;
