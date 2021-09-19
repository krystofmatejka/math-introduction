# Polynomial
___

## Definition

A single variable *polynomial* with real coefficients is a function f that
takes a real number as input, produces a real number as output, and has form:

```
f(x) = a0 + a1 * x + a2 * x^2 + ... + an * x^n
```

where the ai are real numbers. The ai are called coefficients of f. The degree of the polynomial is the integer n.

## Examples

### Implications

Some parts of the equation can be implied

```
3 * x^2 + x - 5 = 3 * x^2 + 1 * x^1 -5 * x^0
```

### Calculation

```
x = 2
a0 = 2
a1 = 0
a2 = 4
a3 = -1

f(x) = a0 + a1 * x + a2 * x^2 + a3 * x^3
f(2) = 2 + 0 + 4 * 4 + -1 * 2^3
f(2) = 10
```

### Exercise

Determine for each function if is or is not a polynomial.

```
f(x) = 0                                - is polynomial (zero polynomial)
g(x) = 12                               - is polynomial (monomial)
h(x) = 1 + x + x^2 + x^3                - is polynomial
i(x) = x^1/2                            - is not polynomial (power should be an integer)
j(x) = 1/2 + x^2 - 2x^4 + 8x^8          - is polynomial
k(x) = 4.5 + 1/x - 5/x^2                - is not polynomial (power should be an positive integer)
l(x) = 3.14 - 1/e * x^5 + e*3.14*x^10   - is polynomial
m(x) = x + x^2 - x^3.14 + x^e           - is not polynomial (power should be an integer)
```

## Introduction to notation
TD: make separate section for notation

### Function

- Inputs (A) are called domain.
- Set of possible outputs (B) are called range and the type of outputs are called codomain.

```
f : A → B
```

In output (range) of this specific function cannot be number 3.

```ts
function f (x: int): int {
  return 2 * x
}
```

Domain and codomain are defined by notation (interface), while the output (range) depends on the semantics (implementation) of the function.

## Existence & Uniqueness

