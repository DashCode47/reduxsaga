import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" title={"Your balance"} value={"202,3.50"} />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines description={"Income"} value={20} isExpense />
      <EntryLines description={"SOmething"} value={200} isExpense={false} />
      <EntryLines description={"PLus"} value={150} isExpense />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;
