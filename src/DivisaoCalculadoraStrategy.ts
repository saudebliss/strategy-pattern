import { iCalculadoraStrategy } from "./iCalculadoraStrategy";

export class DivisaoCalculadoraStrategy implements iCalculadoraStrategy {
  operacao(a: number, b: number): number {
    return a / b;
  }
}
