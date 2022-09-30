import ExpenseItem from "./components/ExpenseItems";

function App() {
  const expensas = [
    {
      id: 1,
      name: "TV Led 32",
      price: 20000,
      date: new Date(2020, 8, 22),
    },
    {
      id: 2,
      name: "Heladera Phillip",
      price: 55000,
      date: new Date(2021, 3, 8)
    },
    {
      id: 3,
      name: "Lavarropas Whirpool",
      price: 49000,
      date: new Date(2021, 5, 17)
    },
    {
      id: 4,
      name: "GPU Nvidia GeForce 3060",
      price: 90000,
      date: new Date(2022, 5, 18)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      name={expensas[0].name} 
      price={expensas[0].price} 
      date={expensas[0].date}
      />
      <ExpenseItem 
      name={expensas[1].name} 
      price={expensas[1].price} 
      date={expensas[1].date}
      />
      <ExpenseItem 
      name={expensas[2].name} 
      price={expensas[2].price} 
      date={expensas[2].date}
      />
      <ExpenseItem 
      name={expensas[3].name} 
      price={expensas[3].price} 
      date={expensas[3].date}
      />
    </div>
  );
}

export default App;
