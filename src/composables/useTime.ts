import { Ref, ref } from 'vue';

export interface IUseTime {
  value: Ref<number>
  isDay: Ref<boolean>
  set(v: number): void
  add(v?: number): void
  /** Returns progress percent (from 0 up to 1).
   * If `isOfHalfDay` is true, returns progress in 6-18 (day) or 18-6 (night) interval
   * else, returns progress in 18-18 (start of night - end of day) interval
   */
  getProgress(isOfHalfDay?: boolean): number
  getTimeCaption(): string
}

function clampTime(value: number): number {
  return value % 24;
}

// TODO: make basing on game minutes instead of hours, to get more flexible logic
export function useTime(startValue = 0): IUseTime {
  const value = ref(startValue);
  const isDay = ref(false);

  function update(newValRaw: number) {
    const newVal = clampTime(newValRaw);
    value.value = newVal;
    isDay.value = newVal >= 6 && newVal <= 18;
  }

  return {
    value,
    isDay,
    set(val) {
      update(val)
    },
    add(val = 1) {
      update(value.value + val)
    },
    getProgress(isOfHalfDay = false) {
      const limiter = isOfHalfDay ? 12 : 24;
      return ((value.value + 6) % limiter) / limiter;
    },
    getTimeCaption() {
      const minutes = `${Math.trunc((value.value % 1) * 60)}`.padStart(2, '0');
      const hours = `${Math.trunc(value.value)}`.padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  };
}