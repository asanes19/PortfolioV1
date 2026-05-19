import descriptionParagraphs from "../../constants/descriptionParagraphs";

const Description = () => {
  return (
    <div className="space-y-6 text-heading">
      {descriptionParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Description;
