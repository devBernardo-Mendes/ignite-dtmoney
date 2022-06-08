import { Summary } from "../Summary";
import { Table } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Table />
    </Container>
  );
}
