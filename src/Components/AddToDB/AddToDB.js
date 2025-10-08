const getStoredData =()=>{
    const storedData = localStorage.getItem("installApp");
    if(storedData){
        const storedAppData = JSON.parse(storedData);
        return storedAppData;
    }
    else{
        return [];
    }
}
const setAppData = (id) =>{
    const storeAppData = getStoredData();
    if(storeAppData.includes(id)){
        return;
    }
    else{
        storeAppData.push(id);
        const data = JSON.stringify(storeAppData);
        localStorage.setItem("installApp", data)
    }
}
export {setAppData};