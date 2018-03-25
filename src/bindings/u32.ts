import { Library as dll } from "ffi";

const user32 = dll("user32", {
  GetKeyState: [ "short", [ "int" ] ],
  GetAsyncKeyState: [ "short", [ "int" ] ],
  mouse_event: [ "void", Array.from(Array(5)).map(() => "int") ]
});

export const enum MouseEventFlag {
  Absolute = 0x8000,
  Move = 0x0001
}

export const enum MouseKey {
  Left   = 0x01,
  Middle = 0x02,
  Right  = 0x04,

  Custom1 = 0x05,
  Custom2 = 0x06
}

export type VirtualKey = MouseKey /* | KeyboardKey */;

export type GetKeyState = (nVirtKey: VirtualKey | number) => number;
export const getAsyncKeyState: GetKeyState = user32.GetAsyncKeyState;
export const getKeyState: GetKeyState = user32.GetKeyState;

export type MouseEvent = (dwFlags: MouseEventFlag | number, dx: number, dy: number, dwDate: number, dwExtraInfo: number) => void;
export const dispatchMouseEvent: MouseEvent = user32.mouse_event;
