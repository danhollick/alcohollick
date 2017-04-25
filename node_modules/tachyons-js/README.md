# tachyons-js

Use [tachyons](http://tachyons.io) with your favorite CSS-in-JS composition solution.

## Differences:
- `snake_cased` rather than `kebab-cased`

## Usage:
Works great with [aphrodite](https://github.com/Khan/aphrodite):
```css
:root {
  // fill in all of the tachyons default variables,
  // or import 'tachyons-js/variables.css';
}
```

```javascript
import { StyleSheet } from 'aphrodite';
import t from 'tachyons-js';

const styles = StyleSheet.create({
  foo: {
    ...t.ma2,
    ...t.ma2_ns,
    ...t.bg_black,
    ...t.ph2,
    ...t.ph3_m,
    ...t.ph3_l,
  },
});
```

hmu if it breaks.
