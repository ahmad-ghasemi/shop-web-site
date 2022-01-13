
const initialState = {
      selectedItems: [],
      itemsCounter: 0,
      total: 0,
      checkout: false ,
      
  }
  
  const sumItems = items => {
      const itemsCounter = items.reduce((total, data) => total + data.count, 0);
      let total = items.reduce((total, data) => total + data.price * data.count, 0).toFixed(2);
      console.log(itemsCounter , total)
      return {itemsCounter, total}
  }
  
  const cartReducer = (state=initialState, action) => {
      switch(action.type) {
          case "ADD_ITEM":
              if (!state.selectedItems.find(item => item._id === action.payload._id) ) {
                  state.selectedItems.push({
                      ...action.payload , 
                      count: 1 ,
                  })
                  
              }
              return {
                  ...state,
                  selectedItems: [...state.selectedItems],
                  ...sumItems(state.selectedItems),
                  checkout: false
              }
          case "REMOVE_ITEM":
              const newSelectedItems = state.selectedItems.filter(item => item._id !== action.payload._id);
              return {
                  ...state,
                  selectedItems: [...newSelectedItems],
                  ...sumItems(newSelectedItems)
  
              }
          case "INCREASE":
              const indexI = state.selectedItems.findIndex(item => item._id === action.payload._id);
              state.selectedItems[indexI].count++;
              return {
                  ...state,
                  ...sumItems(state.selectedItems)
  
              }
          case "DECREASE":
                const indexD = state.selectedItems.findIndex(item => item._id === action.payload._id);
                state.selectedItems[indexD].count--;
                return {
                    ...state,
                    ...sumItems(state.selectedItems)
              }
             
          case "CHECKOUT" :
              return {
                  selectedItems: [],
                  itemsCounter: 0,
                  total: 0,
                  checkout: true
              }
          case "DELETE_CART":
              return {
                  selectedItems: [],
                  itemsCounter: 0,
                  total: 0,
                  checkout: false
              }
          default: 
              return state;
      }   
  }
  
  export default cartReducer