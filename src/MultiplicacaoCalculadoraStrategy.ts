import { iCalculadoraStrategy } from "./iCalculadoraStrategy";

export class MultiplicacaoCalculadoraStrategy implements iCalculadoraStrategy {

  constructor( private a:number, private b:number){}

  operacao(): number {
    return this.a * this.b;
  }
}
