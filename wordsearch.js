const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalJoin2 = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of horizontalJoin2) {
        if (l.includes(word)) return true
    }

    for (let col = letters[0].length - 1; col >= 0; col--) { // loop through each column index of the letters array
        let verticalWord = '';
        for (let row = letters[0].length; row >= 0; row--) { // loops through each row of the current column
        verticalWord += letters[row][col]; // adds the letter from the current row and current col into verticalWord string.
        }


        if (verticalWord.includes(word)) { // if the letters gathered from loop form the word that was entered
            return true;
        }
    }

    for (let col = 0; col < letters[0].length; col++) { // loop through each column index of the letters array
        let verticalWord = '';
        for (let row = 0; row < letters.length; row ++) { // loops through each row of the current column
        verticalWord += letters[row][col]; // adds the letter from the current row and current col into verticalWord string.
        }

        if (verticalWord.includes(word)) { // if the letters gathered from loop form the word that was entered
            return true;
        }
    }

    return false; 
}


module.exports = wordSearch