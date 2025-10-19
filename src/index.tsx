import { createState } from "dreamland/core";

let state = createState({
    counter: 0,
});
(self as any).state = state;

document.body.appendChild(
    <div>
    <button on: click = {() => state.counter++}> click me! </button>
    < p > { use(state.counter)}</p>
        </div>
);