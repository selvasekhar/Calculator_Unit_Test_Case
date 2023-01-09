import { CalculatorService } from "./calculator.service";

describe('CalculatorService', ()=>{
  it('should add two numbers', ()=>{
    const calculator = new CalculatorService();
    let result = calculator.add(2,2);
    expect(result).toBe(4)
    // pending()
  });
  it('should minus two numbers', ()=>{
    let calculator = new CalculatorService();
    let result = calculator.substact(2,2);
    expect(result).toBe(0)
    // pending()
  });
})