import React from "react";
import { Container } from "./styles";

export function Table() {
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
