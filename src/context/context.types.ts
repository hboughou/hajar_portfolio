/* eslint-disable no-unused-vars */
export interface IDispatchFunc {
  (value: string): void;
}

/** Represents application context. */
export interface IAppContext {
  nav?: string;
  changeNav?: IDispatchFunc;
  colorChange?: IDispatchFunc;
  getColor?: IDispatchFunc;
  color?: string;
  getMagicCursor?: IDispatchFunc;
  changeCursor?: IDispatchFunc;
  megicCursor?: string;
}
