const colors = {
  0: '#e5e5e5',
  1: '#F04438',
  2: '#D44949',
  3: '#DCA02D',
  4: '##00FF00',
  5: '#48AE65',
};

const getColor = (power: number, index: number) => {
  if (power > index) {
    return colors[power as keyof typeof colors];
  }
  return colors[0];
};

const indicatorIndexes = [0, 1, 2, 3, 4];
const PasswordIndicator = ({ score }: { score: number }) => {
  return (
    <div className="h-5 mb-5 indicator-container flex items-center justify-center">
      {indicatorIndexes.map((indicatorIndex) => (
        <div
          className="h-1 rounded w-1/6 mr-2"
          key={indicatorIndex}
          style={{
            backgroundColor: getColor(score + 1, indicatorIndex),
          }}
        />
      ))}
    </div>
  );
};

export default PasswordIndicator;
