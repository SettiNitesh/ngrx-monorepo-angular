export interface CounterState {
  count: number;
}

export const initialCounterState = (): CounterState => {
  return { count: 0 };
};
