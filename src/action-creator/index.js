export const addItem=(data)=>{
    return{
        type: "Add-Item",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const saveItem = (data,id)=>{
    return{
        type: "Save-Item",
        payload:{
            save_data:data,
            save_id:id
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