class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = Infinity
        let res = 0

        for(let i =0 ; i< prices.length; i++){
            let num = prices[i]
            if(num < max) {max = num}
            if(num - max > res) res = num - max

        } return res

    }
}
