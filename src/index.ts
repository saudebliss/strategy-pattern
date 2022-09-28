import { SomaCalculadoraStrategy } from "./SomaCalculadoraStrategy";
import { MultiplicacaoCalculadoraStrategy } from "./MultiplicacaoCalculadoraStrategy";
import { Context } from './Context';

export function show(): void {
  const a = 2;
  const b = 1;
  let result = 0;
  const contexto = new Context( new MultiplicacaoCalculadoraStrategy(a, b) );
  result = contexto.executeStrategy()
  console.log(result);
}
show();
