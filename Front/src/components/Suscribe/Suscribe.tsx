import Image from "next/image";

export default function SuscribeButton() {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://www.youtube.com/channel/UC7kEf36fUHfsP8msa6oiygA?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className=" flex bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out"
      >
        Suscribirse
        <Image
          height={30}
          width={30}
          alt="You Tube"
          className="ml-4"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+0lEQVR4nO3ZTYhNYRjA8WtQdkRjKbPysVEWbJTNRDY29kwUWSkrxYJSs5alpVJGKQurGc1CqclHk48kNUlmQRpEhmH66eRV13Xd99x7zpk5t95/3dWt5zn/c9/nvk/P02gkEolEIpHIB1ZjGw7iJC7gCm5iAg/wEm8xFz5f/c3npu9m8RxTGMd1XMY5jGAfNpX18JtxEY+xYHn4hEmcwJpeJI7ii3rxFNu7kciOz6J68gqDeSRW4rV6M5pHZIf6M5NH5JD+YG1M5LT+YFdM5JL+4EhM5FbBBMN4YrkLHveKRA8xVuE43qmOazGR6SLRW2KtD0f1h/IZj4lk/VLP/CfmFtxWLtMxkayZ65lI7OHQZpTBbEzkY1UiTV30KXwoKPIdKzolWqhSpE39/KzkUrR0IhtKEFnXKUGhn7yLo1XoCPvdnQ90SvSm4mJ/phzmYm/sRdki2FrB3+9MTORRkehLeCE+jIncLRK9pQ6yIUNV3ImJ3CiY4ECYjlTN1ZjIqP7gfEzkmP7gcExkr/5gT0xksMajoD8s5h0JZSPQOjMRlQgiO9vMbevCN+zOJRJk9oeBdJ14n01Bc0u01MsZ3Mf8Mj38fMh/Fhu7lmgjNYChMO4fCeP/bA0wFtYCU+EinG1aHWRrhLxrhbE2a4Whjh1uIpFIJBKJxj/8AkQxUQ7lEryoAAAAAElFTkSuQmCC"
        ></Image>
      </a>
    </div>
  );
}
