import { CalculatorContext } from "./calculadora/CalculatorContext";
import { PlusStrategy } from "./calculadora/implementations/PlusStrategy";
import { MultiplyStrategy } from "./calculadora/implementations/MultiplicacaoStrategy";
import { DivideStrategy } from "./calculadora/implementations/DivideStrategy";
const show = () => {
  // Plus
  const calculador = new CalculatorContext(new PlusStrategy());
  console.log(calculador.executeOperation(2, 3));

  // Minus
  calculador.setStrategy(new PlusStrategy());
  console.log(calculador.executeOperation(2, 3));

  // Multiply
  calculador.setStrategy(new MultiplyStrategy());
  console.log(calculador.executeOperation(2, 3));

  // Divide
  calculador.setStrategy(new DivideStrategy());
  console.log(calculador.executeOperation(2, 3));
};
show();
