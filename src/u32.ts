import * as ffi from "ffi";

const user32 = ffi.Library("user32", {
  GetKeyState: [ "short", [ "int" ] ],
  GetAsyncKeyState: [ "short", [ "int" ] ],
  mouse_event: [ "void", Array.from(Array(5)).map(() => "int") ]
});

export const MOUSEEVENTF_MOVE = 0x0001;
export const MOUSEEVENTF_ABSOLUTE = 0x8000;

export const VK_LBUTTON = 0x01;
export const VK_RBUTTON = 0x02;
export const VK_MBUTTON = 0x04;

export const VK_XBUTTON1 = 0x05;
export const VK_XBUTTON2 = 0x06;

export type GetKeyState = (nVirtKey: number) => number;
export const getAsyncKeyState: GetKeyState = user32.GetAsyncKeyState;
export const getKeyState: GetKeyState = user32.GetKeyState;

export type MouseEvent = (dwFlags: number, dx: number, dy: number, dwDate: number, dwExtraInfo: number) => void;
export const dispatchMouseEvent: MouseEvent = user32.mouse_event;
