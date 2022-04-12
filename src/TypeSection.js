const TypeSection = ({ setOption }) => {
  return (
    <div className="typeSection">
      <span
        style={{ marginRight: "20px" }}
        onClick={() => {
          setOption("hiragana");
        }}
      >
        hiragana
      </span>
      <span
        style={{ marginRight: "20px" }}
        onClick={() => {
          setOption("katakana");
        }}
      >
        katakana
      </span>
      <span
        onClick={() => {
          setOption("all");
        }}
      >
        all
      </span>
    </div>
  );
};

export default TypeSection;
