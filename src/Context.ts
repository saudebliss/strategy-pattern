import { iCalculadoraStrategy } from "./iCalculadoraStrategy";


export class Context {
  private strategy: iCalculadoraStrategy;

  constructor(strategy: iCalculadoraStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: iCalculadoraStrategy){
    this.strategy = strategy;
  }

  public executeStrategy(): number {
    return this.strategy.operacao();
  }
}
