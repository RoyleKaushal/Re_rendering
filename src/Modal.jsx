import { useState } from "react";
import useModalDialogue from "./hooks/useModalDialogue";

export default function Modal({ close }) {
  //   const [open, setOpen] = useState(false);
  return (
    <div>
      <>
        <h1>Modal here</h1>
        <button onClick={close}>close</button>
      </>
    </div>
  );
}
