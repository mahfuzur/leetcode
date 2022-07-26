/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1){
        return false;
    }
    let stack = [];
    for(let i = 0; i < s.length; i++){ 
        if(s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '['){
            stack.push(s.charAt(i))
        }else{
            let last = stack.pop();
        
            if(last){
                if((last === '(' && s.charAt(i) !== ')')
                  || last === '{' && s.charAt(i) !== '}'
                   || last === '[' && s.charAt(i) !== ']'
                  ){
                    return false;
                }
            }else{
                return false;
            }
        }
        
        
    }

    return !stack.length;
};