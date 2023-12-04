const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <ul>
        <li>Good :{good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total} </li>
        <li>Positive feedback: {percentage}</li>
      </ul>
    </div>
  );
};
export default Statistics;
