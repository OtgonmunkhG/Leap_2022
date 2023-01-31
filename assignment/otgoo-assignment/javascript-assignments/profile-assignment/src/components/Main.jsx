import mean from "../data/meandata";

export default function Main(props) {
  const content = mean.map((m) => {
    return <div>{m.bigTitle}</div>;
  });
  return (
    <div>
      <div className="header">
        <h1></h1>
        <h2>React</h2>
        <h3>JavaScript Library</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
