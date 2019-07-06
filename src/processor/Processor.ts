export class Processor {
  public static run(results, config) {
    return new Processor(results, config);
  }

  constructor(results, config) {
    console.log({ results, config });
  }
}
