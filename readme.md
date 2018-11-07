# installation

```{r, engine='bash', count_lines}
npm install monthdiff

yarn add monthdiff
```

# Usage

```javascript
const monthDiff = require('monthdiff')


monthDiff(6,7)("+") // should return 1
monthDiff(3,7)("-") // should return 8

```

You can use the output to as setMonth parameter on  `new Date().setMonth()` method

