export function set(key,val){
    return sessionStorage.setItem(key,JSON.stringify(val));
}

export function get(key){
    return JSON.parse(sessionStorage.getItem(key))
}