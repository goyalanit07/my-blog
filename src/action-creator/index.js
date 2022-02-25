export const addItem=(data)=>{
    return{
        type: "Add-Item",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const editItem=(id)=>{
    return{
        type: "Edit-Item",
        id
    }
}
export const deleteItem=(id)=>{
    return{
        type: "Delete-Item",
        id
    }
}