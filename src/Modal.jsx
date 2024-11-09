import { useState } from "react";
import useModalDialogue from "./hooks/useModalDialogue";

export default function Modal() {
  //   const [open, setOpen] = useState(false);
  const { isOpen, open, close } = useModalDialogue();
  return (
    <div>
      <div>
        <button onClick={open}>Open</button>
      </div>
      {isOpen && (
        <>
          <h1>Modal here</h1>
          <button onClick={close}>close</button>
        </>
      )}
    </div>
  );
}
