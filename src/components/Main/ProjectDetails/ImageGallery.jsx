
const ImageGallery = ({ project }) => {
  return (
    <div className="space-y-4">
      {project.gallery
        ?.slice()
        .sort((a, b) => {
          const getNumber = (item) => {
            const name = typeof item === "string" ? item : item.name;
            const match = name?.match(/\d+/);
            return match ? parseInt(match[0], 10) : 0;
          };
          return getNumber(a) - getNumber(b);
        })
        .map((image, index) => {
          const imageUrl = typeof image === "string" ? image : image.url;
          const imageName =
            typeof image === "string"
              ? `project-image-${index}`
              : image.name || `project-image-${index}`;

          return (
            <img
              key={index}
              src={imageUrl}
              alt={imageName}
              className="rounded-lg border border-slate-300"
            />
          );
        })}
    </div>
  );
};

export default ImageGallery;
