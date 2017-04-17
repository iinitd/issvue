export function timeFormat(_date) {
    const date = new Date(_date);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct', 'Nov', 'Dec'];
    return year + '-' + month + '-' + day;
    //return return months[date.getMonth()] +' '+ day+ ', ' +  year;
}