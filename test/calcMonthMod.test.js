const {calcMonthMod} = require('../index')

test("input 6 and 7 with + symbol should return 1", ()=>{
    expect(calcMonthMod(6,7)("+")).toBe(1)
})

test("input 3 and 7 with - symbol should return 8", ()=> {
    expect(calcMonthMod(3,7)("-")).toBe(8)
})

test("only run the method will return 2", ()=>{
    expect(calcMonthMod()()).toBe(2)
})

test("input 10 as parameter in first method will return 11", ()=>{
    expect(calcMonthMod(10)()).toBe(11)
})

