import Thumnail from "./Thumnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
      l
    >
      {results.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
