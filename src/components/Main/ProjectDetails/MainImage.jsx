
const MainImage = ({ project }) => {
  return (
    <div>
                    <img
                src={project.mainImage}
                alt={project.name}
                className="rounded-lg border border-slate-300"
              />
    </div>
  )
}

export default MainImage
