class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //const rows = Array.from({ length: 9 }, () => new Set());
        let rows = Array.from({length:9} ,() => new Set())
        let colum = Array.from({length:9} ,() => new Set())
        let box = Array.from({length:9} ,() => new Set())


        for(let r= 0; r< 9; r++){

            for(let c=0; c< 9;c++){

                let val = board[r][c]
                if(val === ".") continue

                let index = Math.floor(r/3) * 3 + Math.floor(c/3)

                if(rows[r].has(val) || colum[c].has(val) || box[index].has(val)){
                    return false
                }

                rows[r].add(val)
                colum[c].add(val)
                box[index].add(val)
            }
            
        }return true
    }
}
