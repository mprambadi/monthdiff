# installation

```{r, engine='bash', count_lines}
npm install monthdiff

yarn add monthdiff
```

# Usage

```javascript
const {calcMonth, calclMonthMod} = require('monthdiff')


calcMonth(6,7)("+") // should return 1
calcMonth(3,7)("-") // should return 8
calcMonthMod(6,7) // should return 1
calcMonthMod(3,-7) // should return 8

```

You can use the output to as setMonth parameter on  `new Date().setMonth()` method

