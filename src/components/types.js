const createEmployee = ({
  name = 'default',
  hireDate = 5,
  title = 'Director'
}) => ({
  name,
  hireDate,
  title
})

const newEmp = createEmployee()

console.log(newEmp)
/**
 *
 * @param {*} param0
 */
function createTitle ({ name = 'default', title = 'Director' }) {
  return {
    name,
    title
  }
}

const newTit = createTitle()

console.log(newTit)

/**
 *
 * @param {*} name
 * @param {*} title
 */
function createDude ({ name = 'default', title = 'Director' }) {
  return {
    name,
    title
  }
}

const newD = createDude()

console.log(newD)

x = findMax(1, 123, 500, 115, 44, 88)

function findMax () {
  var i
  var max = '-Infinity'
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  max = max.toString
  return max
}
