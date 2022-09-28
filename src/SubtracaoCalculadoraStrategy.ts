import { iCalculadoraStrategy } from "./iCalculadoraStrategy";

export class SubtracaoCalculadoraStrategy implements iCalculadoraStrategy {
  operacao(a: number, b: number): number {
    return a - b;
  }
}
