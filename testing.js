
it('2 + 2 = 4', function() {
  expect(2+2).toEqual(4)
})

it('2 + 2 = 5', function() {
  expect(2+2).toEqual(5)
})

function it(label, callback) {
  console.log(`${label}`)
  callback()
}

function expect(a) {
  return {
    toEqual: function(b) {
      if (a === b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }
    },

    toBe: function(c) {
      if (a === c) {
        console.log('Pass')
      } else {
        console.log('Fail')
      }
    }
  }
}


it('knows a = c', function() {
  var c = 'hannah'
  var a = 'hannah'
  expect(c === a).toBe(true)
})
