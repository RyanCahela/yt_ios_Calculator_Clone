import Display from "../components/Display";
import NumpadButtons from "../components/NumpadButtons";
import FunctionButtons from "../components/FunctionButtons";
import OperatorButtons from "../components/OperatorButtons";

export default function Home() {
  return (
    <section className="bg-black text-white w-[400px]">
      <div className="flex flex-col">
        <Display />
        <div className="grid grid-cols-4 grid-flow-dense place-items-center gap-5 p-5">
          <div className="contents">
            <FunctionButtons />
          </div>
          <div className="contents">
            <OperatorButtons />
          </div>
          <div className="contents">
            <NumpadButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
