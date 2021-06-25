const SortByYear = (data) => {
    if(data === undefined || data == null) return null;
    return data.sort( (a,b) =>{
        const dateA = a.end =="Present" ? new Date() : new Date(a.end);
        const dateB = b.end =="Present" ? new Date() : new Date(b.end);
        return dateB-dateA;
    });
}
 
export default SortByYear;