export const isEmailAddress=(str)=>{
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean
}

export const isNotEmpty=(str)=>{
    var pattern =/\S+/;
    return pattern.test(str);  // returns a boolean
}
export const  isNumber=(str)=>{
    var pattern = /^\d+$/;
    return pattern.test(str);  // returns a boolean
}
export const isSame=(str1,str2)=>{
    return str1 === str2;
}

export const checkErrors=(str)=>{
    const errors= Object.values(str).some(val=> val.length > 0)
    return errors
}