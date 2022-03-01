const initialData = {
    list: [],
    editText: {}
}
const blogReducer = (state = initialData, action) => {
    switch (action.type) {
        case "Add-Item":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "Save-Item":
            const {save_id,save_data} = action.payload;
            state.list.map((element) => {
                if (element.id===save_id) {
                    return(element.data=save_data)                  
                }
            })
            return{
                ...state,
                list : [
                    ...state.list,
                ]
            }

        case "Edit-Item":
            const editItem = state.list.find((element) => element.id === action.id)
            return {
                ...state,
                editText: editItem
            }

        case "Delete-Item":
            const newList = state.list.filter((element) => element.id !== action.id)

            return {
                ...state,
                list: newList
            }
        default: return state;
    }
}
export default blogReducer;