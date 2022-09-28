import { iCalculatorStrategy } from "../iCalculatorStrategy";

export class MultiplyStrategy implements iCalculatorStrategy {
  operation(a: number, b: number): number {
    return a * b;
  }
}
