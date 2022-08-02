import { useParams } from "react-router-dom";
import { members } from "../../../members";
import { Link } from "react-router-dom";

function Costumer() {
  const params = useParams();
  const member = members.find((member, index) => member.id === params.id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
export default Costumer;
