//rrd imports
import { Link } from "react-router-dom";
//custom hooks
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    ""
  );
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((quizze) => {
            return (
              <Link
                to={`/quizz/${quizze.title}`}
                key={quizze.id}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: quizze.color }}>
                  <img src={quizze.icon} alt={quizze.title} />
                </figure>
                <span>{quizze.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
