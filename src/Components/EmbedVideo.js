import React from 'react'
import ReactPlayer from 'react-player/youtube'

function EmbedVideo({ videoId }) {
    return (
        <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=ABkF3MSxoQg" />
        </div>
    )
}

export default EmbedVideo
