//rrd imports
import { useParams } from "react-router-dom";
//cutom hooks
import { useFetch } from "../hooks/useFetch";
//react
import { useEffect } from "react";
//components
import { Test } from "../components";

function Quizz() {
  const { title } = useParams();

  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://online-json-server-api.up.railway.app/project/66ab76941d2cd3eb1145d681/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </section>
  );
}

export default Quizz;
