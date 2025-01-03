import { SourceCodeCircleIcon } from "hugeicons-react";

const Languages = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 max-w-96 language-section ">
      <div className="flex flex-col">
        <div className="flex items-center no-wrap gap-2 font-bold text-xl">
          <SourceCodeCircleIcon size={24} color={"#a5b4fc"} /> Laguauges I have
          used
        </div>
        <div className="flex flex-wrap gap-4 text-sm mt-5">
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Python</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">C++</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">JavaScript</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">TypeScript</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">C</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">SQL</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Next.js</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">React.js</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">
            React Native
          </div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Node.js</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">NoSQL</div>
        </div>
      </div>
      <div className="flex flex-col text-neutral-300 Next-on-my-list">
        <div className="flex items-center no-wrap gap-2 font-bold text-xl">
          <SourceCodeCircleIcon size={24} color={"#a5b4fc"} /> Next on my list
        </div>
        <div className="flex flex-wrap gap-4 text-sm mt-5">
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Rust</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">GraphQl</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Prisma</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Docker</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Java</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">SQL</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">Ruby</div>
          <div className="bg-neutral-700 py-2 px-4 rounded-xl">.Net</div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
