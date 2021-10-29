
const Podcast = () => {
  let title = '1';

  return (
    <div className="podcastDiv">
      <iframe
        src={'https://www.buzzsprout.com/1740726/9436340-intro?client_source=small_player&iframe=true'}
        loading="lazy"
        width="100%"
        height="200vh"
        scrolling="no"
        title={`${title}`}
      >
      </iframe>
    </div>
  )
}

export default Podcast;
