import { iCalculadoraStrategy } from "./iCalculadoraStrategy";

export class SomaCalculadoraStrategy implements iCalculadoraStrategy {

  constructor(private a: number, private b: number){}

  operacao(): number {
    return this.a + this.b;
  }
}
