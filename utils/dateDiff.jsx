const DateDiff = (start,end) => {
    const diff = new Date(end-start);
    const month = (parseInt(diff.getMonth())+1) % 12;
    const extraYear = Math.floor((parseInt(diff.getMonth())+1) /12);
    const year = parseInt(diff.getFullYear()) - 1970 + extraYear;

    let text = "";
    if(year > 0) text += `${year} Year${year>1 ? "s" : ""}`
    if(month > 0) text += ` ${month} Month${month>1 ? "s" : ""}`
    return text.trim();
}
 
export default DateDiff;