const getDataFromLocalStorage= ()=>{
    const getData = localStorage.getItem('appliedJobs');
    if(getData){
     const   localStorageData = JSON.parse(getData);
        return localStorageData;
    }
    return [];
}


// set item
const setDataInLocalStorage = (id)=>{
    const storedData = getDataFromLocalStorage();
    const exist = storedData.find(jobid => jobid === id);
    if(!exist){
        storedData.push(id);
        localStorage.setItem('appliedJobs', JSON.stringify(storedData));

    }

};
export {setDataInLocalStorage, getDataFromLocalStorage}