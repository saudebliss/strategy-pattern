import { describe, it, expect } from "@jest/globals";
import { CalculatorContext } from "./CalculatorContext";
import { PlusStrategy } from "./implementations/PlusStrategy";
import { MinusStrategy } from "./implementations/MinusStrategy";
import { MultiplyStrategy } from "./implementations/MultiplicacaoStrategy";
import { DivideStrategy } from "./implementations/DivideStrategy";

describe("The calculator", () => {
  it("is going to plus two numbers", () => {
    const a = 2;
    const b = 3;
    const calculator = new CalculatorContext(new PlusStrategy());

    expect(calculator.executeOperation(a, b)).toBe(2 + 3);
  });

  it("is going to subtract two numbers", () => {
    const a = 2;
    const b = 3;
    const calculator = new CalculatorContext(new MinusStrategy());

    expect(calculator.executeOperation(a, b)).toBe(2 - 3);
  });

  it("is going to multiply two numbers", () => {
    const a = 2;
    const b = 3;
    const calculator = new CalculatorContext(new MultiplyStrategy());

    expect(calculator.executeOperation(a, b)).toBe(2 * 3);
  });

  it("is going to divide two numbers", () => {
    const a = 2;
    const b = 3;
    const calculator = new CalculatorContext(new DivideStrategy());

    expect(calculator.executeOperation(a, b)).toBe(2 / 3);
  });

  it("is going to do two operations", () => {
    const a = 6;
    const b = 3;
    const calculator = new CalculatorContext(new MultiplyStrategy());
    expect(calculator.executeOperation(a, b)).toBe(6*3);
    calculator.setStrategy( new DivideStrategy() )
    expect(calculator.executeOperation(a, b)).toBe(2);
  });
});
