import {
  dashboard,
  expenses,
  signout,
  transactions,
  trend,
} from "../utils/Icons";

export const menuItems = [
  {
    id: 5,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
  {
    id: 1,
    title: "SignIn",
    icon: signout,
    link: "/signin",
  },
];
