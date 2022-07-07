# Konsoled

## Usage
You can put anything into `Konsole` as long as console.log supports it.
```js
import Konsole from "konsoled";

Konsole( 'Hi' ); // Hi
```
You can also just import it as `console` and everything will work as is from before with no changes
```js
import console from "konsoled";

console.log( 'Hi orig' ); // Hi orig
```

`Konsoled` also returns the input as value so if you put in a function you can log and save its value at the same time
```js
import Konsole from "konsoled";

const add = (a,b)=> Number(a) + Number(b);

const added = Konsole( add(1,2) ); // 3
// added will be integer 3 can can be used later
```

## Todo
- Add support for `console.warn` etc.
- Manipulate the text tag
- Add console.weak plugin to remove all instances on build