import { EventEmitter } from "events";
import Timer = NodeJS.Timer;

export abstract class IntervalListener extends EventEmitter {
  private _t: Timer;

  public listen(fn: Function, d: number = 10): void {
    this.dispose();
    this._t = setInterval(fn.bind(this), d);
  }
  public dispose(): void {
    if (this._t) clearInterval(this._t);
  }
}