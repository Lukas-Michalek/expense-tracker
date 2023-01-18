import { createSlice} from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

//TODO => The Object.fromEntries() static method transforms a list of key-value pairs into an object.

  ///////////////////////////////////////////////////
  // const entries = new Map([
  //   ['foo', 'bar'],
  //   ['baz', 42]
  // ]);

  // const obj = Object.fromEntries(entries);

  // console.log(obj);
  // Expected output: Object { foo: "bar", baz: 42 }
  ///////////////////////////////////////////////
//   const object1 = { a: 1, b: 2, c: 3 };

// const object2 = Object.fromEntries(Object.entries(object1).map(([key, val]) => [key, val * 2]),
// );

// console.log(object2);
// { a: 2, b: 4, c: 6 }
////////////////////////////////////////////////////////////////


const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    
    //TODO=>  add the new transaction object (action.payload) to the correct category’s transaction list in the transactions state object.

    addTransaction: (state, action) => {
      
      const category = action.payload.category;
      state[category].push(action.payload)


    },

    deleteTransaction: (state, action) =>{
      
      const category = action.payload.category;
      const id = action.payload.id;

      state[category] = state[category].filter((transaction) => transaction.id !== id)

    }
  }
})




// export const addTransaction = (transaction) => {
//   return {
//     type: 'transactions/addTransaction',
//     payload: transaction
//   }
// }

// export const deleteTransaction = (transaction) => {
//   return {
//     type: 'transactions/deleteTransaction',
//     payload: transaction
//   }
// }

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

// const transactionsReducer = (state = initialState, action) => {
//   let newTransactionsForCategory;
  
//   switch (action.type) {
    
//     case 'transactions/addTransaction':
//       newTransactionsForCategory = [...state[action.payload.category].slice(), action.payload]
//       return { ...state, [action.payload.category]: newTransactionsForCategory}
    
//     case 'transactions/deleteTransaction':
//       const deletedIndex = state[action.payload.category].findIndex(transaction => transaction.id === action.payload.id);
//       newTransactionsForCategory = state[action.payload.category].filter((item, index) => index !== deletedIndex)
//       return { ...state, [action.payload.category]: newTransactionsForCategory}
    
//     default:
//       return state;
//   }
// }

export const {addTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
