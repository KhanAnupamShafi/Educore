const PasswordSuggestion = ({
  suggestions,
}: {
  suggestions: string[];
}) => {
  return (
    <ul className="">
      {suggestions.map((suggestion) => (
        <li
          className="text-xs pb-2 text-center text-orange-700"
          key={suggestion}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default PasswordSuggestion;
