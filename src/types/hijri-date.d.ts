declare module 'hijri-date' {
  interface HijriDateConstructor {
    new (date?: Date | string | number): HijriDateInstance;
    default?: HijriDateConstructor;
  }

  interface HijriDateInstance {
    getDate(): number;
    getMonth(): number;
    getMonthIndex(): number;
    getFullYear(): number;
    getDay(): number;
    format(pattern: string): string;
    toString(): string;
  }

  const HijriDate: HijriDateConstructor;
  export = HijriDate;
}