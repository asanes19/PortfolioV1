import descriptionParagraphs from "../../data/descriptionParagraphs";

const Description = () => {
  return (
    <div className="space-y-6">
      {descriptionParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Description;
