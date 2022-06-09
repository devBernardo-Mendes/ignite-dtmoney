import React, { useEffect } from "react";
import { Container } from "./styles";

export function Table() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response: { json: () => any }) => response.json())
      .then((data: any) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 1200,00</td>
            <td>Desenvovimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 790,00</td>
            <td>Casa</td>
            <td>05/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
