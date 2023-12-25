const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-40 overflow-hidden bg-violet-700 opacity-75 flex flex-col items-center justify-center">
      <div
        aria-label="Loading..."
        className="flex items-center space-x-0 z-50"
        role="status">
        <svg
          className="h-20 w-20 animate-spin stroke-white"
          viewBox="0 0 256 256">
          <path d="M128 32v32M195.9 60.1l-22.6 22.6M224 128h-32M195.9 195.9l-22.6-22.6M128 224v-32M60.1 195.9l22.6-22.6M32 128h32M60.1 60.1l22.6 22.6" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
