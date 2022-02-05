const initialState = {
    inventoryFilter: [] as any,
    sortValue: 'Default',
    inventoryFiltered: [] as any
  };

  const inventoryFiltersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ALL_BUT_CLEAR':
          return {
              inventoryFilter: action.payload.inventoryFilter,
              sortValue: action.payload.sortValue,
              inventoryFiltered: action.payload.inventoryFiltered
          }
      
      case 'CLEAR_ALL':
        return {
            ...initialState
        }
      case 'SIGN_OUT': 
        return {
          ...initialState
        }
      default:
        return {...state}
      
    }
  };

  export default inventoryFiltersReducer;