import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'

import AddExpensepage from '../components/AddExpensePage'
import EditExpense from '../components/EditExpense'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddHelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFound'
import Header from '../components/Header'


//   const AppRouter = () => (
//     <BrowserRouter>
//     <div>
//     <Header />
//     <Switch>
//       <Route path="/" component={ExpenseDashboardPage} exact={true} />
//       <Route path="/create" component={AddExpensepage} />
//       <Route path="/edit/:id" component={EditExpense} />
//       <Route path="/help" component={AddHelpPage} />
//       <Route component={NotFoundPage} />
//     </Switch>
//     </div>
//   </BrowserRouter>

//   )
// export default AppRouter

  const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensepage} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/help" component={AddHelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>

  )
export default AppRouter

