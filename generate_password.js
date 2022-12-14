// define sample function to randomly return an item in an array
function sample(array){
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
// define generate password function
function generatePassword(options){
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  

  // create a collection to store things users picked up
  let collection = []

   if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  

  // remove things users do not want
if (options.excludeCharacters){
  collection = collection.filter(character => !options.excludeCharacters.includes(character)) 
}

  // return error notice if collection is empty
  if (collection.length === 0){
    return 'There is no valid character in your selection.'
  }
  // start generating password
  let password = ''
  for (let i = 0; i < Number(options.length); i++){
    password += sample(collection)
  }
  // return password
  return password
}


// export generatePassword function for other files to use
module.exports = generatePassword