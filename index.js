function mutableVar(type, value) {
  let targetObj = new type(value)
  // console.log({type, value, targetObj}, typeof value, typeof targetObj)
  if (typeof value !== typeof targetObj.valueOf())
    throw new TypeError(`type of ${JSON.stringify(value)} is not ${type.name}`)
  return new Proxy(targetObj, {
    get(target, prop) {
      // console.log({type, value, target, prop})
      if (prop !== '_')
        throw SyntaxError('Use _ property to access the value')
      return value
    },
    set(target, prop, newValue) {
      // console.log({type, value, target, prop, newValue})
      if (prop !== '_')
        throw SyntaxError('Use _ property to access the value')
      if (typeof newValue !== typeof value)
        throw TypeError(`type of ${newValue} is not ${type.name}`)
      value = newValue
      return true
    }
  })
}

// Read variable
let name = mutableVar(String, "Foo")
console.log({ name: name._ })
// { name: 'Foo' }

// Mutate variable
let age = mutableVar(Number, 10)
age._ = 15
console.log({ age: age._ })
// { age: 15 }

// Try to mutate using a value of wrong type
try {
  let email = mutableVar(String, "test@email.com")
  email._ = 50
  console.log({ email: email._ })
} catch (e) {
  console.error(e.name + ': ' + e.message)
  // TypeError: type of 50 is not String
}

// Try to assign a value of wrong type
try {
  let phoneNumber = mutableVar(Number, "9876543210")
  console.log({ phoneNumber: phoneNumber._ })
} catch (e) {
  console.error(e.name + ': ' + e.message)
  // TypeError: type of "9876543210" is not Number
}

// TODO: remove underscore syntax