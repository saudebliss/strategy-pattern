import { iCalculatorStrategy } from "./iCalculatorStrategy";

export class CalculatorContext {
  private strategy: iCalculatorStrategy;

  constructor(strategy: iCalculatorStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: iCalculatorStrategy) {
    this.strategy = strategy;
  }

  public executeOperation(a: number, b: number): number {
    return this.strategy.operation(a, b);
  }
}
