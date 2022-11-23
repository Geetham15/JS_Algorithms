function validAnagram(first, second) {
    let valid = false
    if(first.length !== second.length) {
        valid = false
        return bool
    }

    const lookup = {}

    for(let i = 0; i < first.length; i++) {
        const letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log('lookup : ', lookup)

    for(let i = 0; i < second.length; i++) {
        let letter = second[i]
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            valid = false
            console.log("It's not an anagram")
            return valid
        } else {
            lookup[letter] -= 1
            console.log(lookup[letter])
        }
    }
    valid = true
    console.log("It's an anagram")
    return valid
}

validAnagram('testtext', 'texttest')
validAnagram('iceman', 'cinema')
validAnagram('anagram', 'nagaram')

validAnagram('anagrams', 'nagaramm') // false