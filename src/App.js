import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLiness from "./components/EntryLiness";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setisExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
    }
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));
    });
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);

    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  }

  function editEntry(id) {
    console.log("edit entry with id:", { id });
    if (id) {
      const index = entries.findIndex((entry) => entry.id == id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setisExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setisExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" title={"Your balance"} value={total} />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLiness
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />
      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setisExpense={setisExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setisExpense={setisExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "WorkIncome",
    value: 10,
    isExpense: true,
  },
  {
    id: 2,
    description: "Rentnt",
    value: 300,
    isExpense: false,
  },
  {
    id: 3,
    description: "BusIncome",
    value: 200,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: 500,
    isExpense: false,
  },
];
