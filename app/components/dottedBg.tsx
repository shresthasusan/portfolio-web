const DottedBg = () => {
  const dots = [];
  const rows = 20;
  const cols = 30;

  for (let i = 0; i < rows * cols; i++) {
    dots.push(
      <div
        key={i}
        className="group cursor-crosshair rounded-full p-2 w-6 transition-colors hover:bg-zinc-600"
        data-index={i}
      >
        <div
          className="dot-point h-[10px] w-[10px] rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-indigo-500 group-hover:to-white group-hover:scale-150 transition-all duration-500"
          data-index={i}
        ></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-30 absolute gap-[3px] max-w-full overflow-hidden translate-x-1/2 -translate-y-20 ">
      {dots}
    </div>
  );
};

export default DottedBg;
