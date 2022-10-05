import { Ref, ref } from 'vue';

export interface IUseTime {
  value: Ref<number>
  set(v: number): void
  add(v?: number): void
  getProgress(): number
}

function clampTime(value: number): number {
  return value % 24;
}

export function useTime(startValue = 0): IUseTime {
  const value = ref(startValue);

  return {
    value,
    set(val) {
      value.value = clampTime(val)
    },
    add(val = 1) {
      value.value = clampTime(value.value + val)
    },
    getProgress() {
      return value.value / 24;
    },
  };
}