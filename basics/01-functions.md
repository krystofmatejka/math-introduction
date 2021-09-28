# Funkce

Funkce je předpis, který na základě parametru `x` z definičního oboru `M` přiřadí právě jedno `y` z oboru hodnot `N`.

**Matematická notace**
```
y = f(x)
f:y = x
```

**Programátorská notace**
```
function f<M, N>(x: M): N {}
var y = f(x)
```

## Definiční obor funkce

Definiční obor funkce jsou všechny přípustné hodnoty, které můžeme ve funkci f(x) dosadit za argument x.

V programátorské jargonu lze definiční obor považovat za implementaci funkce.

Matematické funkce narozdíl od programátorskýho funkcí svou výslednou hodnotu nemusí počítat, všechny možné výsledky jsou předem známy a funkce tak slouží v principu jako vyhledávací tabulka.

**Příklad definičního oboru funkce pro zdvojnásobení**
```
D(f) = ℝ
f(x) = 2x
```

**Příklad možných výsledků funkce pro zdvojásobení**

| x | y |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |

**Velká část běžně používaných symbolů jsou zkratky pro funkce**

- |x| = absolutní hodnota
- x! = faktoriál
- x² = druhá mocnina
- √x = odmocnina
