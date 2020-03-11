export class TestPromise<T> {
  public promise: Promise<Partial<T>>;

  public resolve: [T] extends [void] ? (data?: Partial<T> | T) => void : (data: Partial<T> | T) => void;
  public reject: (err: unknown) => void;

  constructor() {
    this.promise = new Promise<Partial<T>>((resolve: any, reject: any): void => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
