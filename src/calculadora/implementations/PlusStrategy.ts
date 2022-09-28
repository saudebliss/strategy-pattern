import { iCalculatorStrategy } from "../iCalculatorStrategy";

export class PlusStrategy implements iCalculatorStrategy {
  constructor() {}

  operation(a: number, b: number): number {
    return a + b;
  }
}
