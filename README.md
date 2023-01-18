# **Expense Tracker**
This project—a budgeting and expense tracking app—allows to practice refactoring with Redux Toolkit. The app allows to set budgets for various categories, such as food and transportation, and track transactions in those categories. It then sums spending in each category to calculate the amount of money that remains to be spent.

To help to understand how the data of the application works, we will consider an example of the Redux store’s state:

```
{
  budgets: [ 
    { category: 'housing', amount: 400 },
    { category: 'food', amount: 100 },
    ...
  ],
  transactions: {
    housing: [ 
      { 
        category: 'housing', 
        description: 'rent', 
        amount: 400, 
        id: 123 
      }
    ],
    food: [ 
      { 
        category: 'food', 
        description: 'groceries on 1/12/2021', 
        amount: 50, 
        id: 456 
      },
      { 
        category: 'food', 
        description: 'dinner on 1/16/2021', 
        amount: 12, 
        id: 789 
      },
    ]
  }
 
 
}
```

I have worked primarily in budgetsSlice.js and transactionsSlice.js where reducers and action creators were at first programmed by hand. The task  was to refactor this project using a slice-based approach to produce the app’s actions and reducers.

