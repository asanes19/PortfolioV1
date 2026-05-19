
const VideoRender = ({ project }) => {
  return (
    <div>
                  {project.video?.url && (
              <video
                className="rounded-lg border border-border"
                src={project.video.url}
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )}
    </div>
  )
}

export default VideoRender
