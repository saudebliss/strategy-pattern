import { iCalculatorStrategy } from "../iCalculatorStrategy";

export class MinusStrategy implements iCalculatorStrategy {
  operation(a: number, b: number): number {
    return a - b;
  }
}
