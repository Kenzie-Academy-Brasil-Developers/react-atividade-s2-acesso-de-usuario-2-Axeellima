import { useParams } from "react-router-dom";
import { members } from "../../../members";
import { Link } from "react-router-dom";

function Company() {
  const params = useParams();
  const member = members.find((member, index) => member.id === params.id);

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
export default Company;
