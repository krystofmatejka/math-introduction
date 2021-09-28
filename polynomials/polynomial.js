// examples
// zero = polynomial([])
// f = polynomial([1, 2, 3])
// g = polynomial([-8, 17, 0, 5])

// f + g == polynomial([-7, 19, 3, 5])
// f(1) == 6

const ZERO = 0

/**
 * Return the unique polynomial of degree at most n passing through the given n+1 points
 *
 * @param {number[]} points
 * @returns {number}
 */
function interpolate(points) {
  if (!Array.isArray(points) || !points.length) {
    throw new Error('Invalid argument. Points must be a non empty array')
  }

  const terms = []
  points.forEach((_, i) => {
    terms.push(singleTerm(points, i))
  })

  return terms.reduce((acc, current) => acc + current, 0) + ZERO
}

/**
 *
 * @param {number[]} points
 * @param {number} i
 * @returns {number}
 */
function singleTerm(points, i) {
  const theTerm = polynomial([1])
  const [xi, xj] = points[i]

  points.forEach((point, i2) => {
    if (i !== i2) {
      
    }
  })
}
