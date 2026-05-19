
const MainImage = ({ project }) => {
  return (
    <div>
                    <img
                src={project.mainImage}
                alt={project.name}
                className="rounded-lg border border-border"
              />
    </div>
  )
}

export default MainImage
