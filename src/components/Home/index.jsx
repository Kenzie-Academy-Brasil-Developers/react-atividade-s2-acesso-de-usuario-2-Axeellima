import { Link } from "react-router-dom";
function Home({ members }) {
  return (
    <div>
      {members.map((member, index) =>
        member.type === "pj" ? (
          <Link to={`/company/${member.id}`}>{member.name}</Link>
        ) : (
          <Link to={`/customer/${member.id}`}>{member.name}</Link>
        )
      )}
    </div>
  );
}
export default Home;
