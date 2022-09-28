import { iCalculatorStrategy } from "../iCalculatorStrategy";

export class DivideStrategy implements iCalculatorStrategy {
  operation(a: number, b: number): number {
    return a / b;
  }
}
