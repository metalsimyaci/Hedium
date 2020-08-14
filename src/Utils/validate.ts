export function isExternal(path: string): boolean {
  console.log("path");
  console.log(path);
    return /^(https?:|mailto:|tel:)/.test(path);
}

export function validURL(url: string): boolean {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
}

export function validLowerCase(str: string): boolean {
    const reg = /^[a-z]+$/
    return reg.test(str)
  }
  
  export function validUpperCase(str: string): boolean {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }
  
  export function validAlphabets(str: string): boolean {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  }
  
  export function isString(str: any): boolean {
    if (typeof str === 'string' || str instanceof String) {
      return true
    }
    return false
  }
  
  export function isArray(arg: any): boolean {
    if (typeof Array.isArray === 'undefined') {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
  }