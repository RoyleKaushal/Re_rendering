const waitingForSomething = (ms) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};
export default function SlowComponent({time}) {
  waitingForSomething(time[0]);
  return <>I am slow</>;
}
