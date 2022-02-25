const initialData = {
    list: [],
    text: {}
}
const blogReducer = (state = initialData, action) => {
    switch (action.type) {
        case "Add-Item":
            const { id, data } = action.payload;

            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
            case "Edit-Item":
                const editList = state.list.filter((element)=>element.id === action.id)
                return {
                    ...state,
                    text: editList
                }

            case "Delete-Item":
                const newList = state.list.filter((element)=>element.id !== action.id)
    
                return {
                    ...state,
                    list : newList
                }
        default: return state;
    }
}
export default blogReducer;