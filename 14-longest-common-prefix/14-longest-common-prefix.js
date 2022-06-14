/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    if(strs.length === 1){
        return strs[0];
    }
        for(let i =0; i < strs.length; i++){
           if(!strs[i]){
            return ''
            }
        }
    let prefixLength = 0;
    
    while(prefixLength <= strs[0].length){
      
        for(let i =0; i < strs.length; i++){
            if(strs[0].charAt(prefixLength) !== strs[i].charAt(prefixLength)){
                return strs[0].substr(0,prefixLength)
            }
        }
        prefixLength++
    }
    return strs[0].substr(0,prefixLength)
};