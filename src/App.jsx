import { memo, Profiler, useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import RefactorComponent from "./RefactorComponent";
import useModalDialogue from "./hooks/useModalDialogue";
import AnotherSlowComponent from "./AnotherSlowComponent";

const MemoizeComponent = memo(({ time, custom }) => (
  <SlowComponent time={time} custom={custom} />
));

const MemoizeAnotherComponent = memo(({ children }) => (
  <AnotherSlowComponent children={children} />
));

function App() {
  // const { isOpen, open, close } = useModalDialogue();
  // const [isOpen, setIsOpen] = useState(false);
  // const timeArray = useMemo(() => {
  //   return [1000];
  // }, []);

  // const service = useCallback(() => {}, []);

  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Aggregate or log render timings...
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }

  const [x, setX] = useState(0);

  const newComponent = useMemo(() => {
    return (
      <>
        <h1>I am rendered</h1>
        <div>I am again here</div>
      </>
    );
  }, []);

  return (
    <Profiler id="App" onRender={onRender}>
      <>
        {/* <div>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div> */}
        <div>
          <button onClick={() => setX(x + 1)}>Increment</button>
        </div>
        <div>Value: {x}</div>
        <MemoizeAnotherComponent>{newComponent}</MemoizeAnotherComponent>
        {/* <MemoizeComponent time={timeArray} custom={service} /> */}
        {/* {isOpen && <Modal close={() => setIsOpen(false)} />} */}
      </>
    </Profiler>
  );
}

export default App;
