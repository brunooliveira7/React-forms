import "./App.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function onSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Evento {name}</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nome do evento"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error">Nome é obrigatório</span>

        <input type="date" placeholder="Nome do evento" lang="pt-BR" />

        <select defaultValue="">
          <option value="" disabled>
            Selecione...
          </option>

          <option value="technology">React</option>
          <option value="entertainment">Node.js</option>
          <option value="business">Javascript</option>
          <option value="business">Typescript</option>
        </select>

        <textarea placeholder="Descrição" rows={4} />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
