const transpose = function(matrix) {
   let newMatrix = [];
   
   for (let i = 0; i < matrix[0].length; i++) {
     let arr = [];
     for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
     }
     newMatrix.push(arr);
   }
   return newMatrix;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalReverseJoin = letters.map(ls => ls.reverse().join(''));
    const verticalReverseJoin = transpose(letters).map(ls => ls.reverse().join(''));
    //console.log("horR: ", horizontalReverseJoin);
    //console.log("verR: ", verticalReverseJoin);
    //console.log("hor: ", horizontalJoin);
    //console.log("ver: ", verticalJoin);
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    for (let l of horizontalReverseJoin) {
        if (l.includes(word)) return true;
    }
    for (let l of verticalReverseJoin) {
        if (l.includes(word)) return true;
    }

    return false;
}

module.exports = wordSearch