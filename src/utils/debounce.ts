export const debounce = <T>(func: Function, time: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...(args as T[]));
    }, time);
  };
};
