import { IntervalListener } from "./abstract/interval_listener";
import { getAsyncKeyState, VirtualKey } from "./bindings/u32";

export class KeyListener extends IntervalListener {
  private _wasDownRecently: boolean;

  constructor(key: VirtualKey) {
    super();

    this.listen(() => {
      if (getAsyncKeyState(key) < 0 && !this._wasDownRecently) {
        this._wasDownRecently = true;
        this.emit("down", key);
      } else if (getAsyncKeyState(key) >= 0 && this._wasDownRecently) {
        this._wasDownRecently = false;
        this.emit("up");
      }
    }, 25);
  }
}