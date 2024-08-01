import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="error-container container">
        <h1>
          {" "}
          <b>
            404:
          </b>
        </h1>
        <h3>
          <i>
            {" "}
            We couldn't find the page you were looking for. Try using the search
            box. If that doesn't work, take a break, listen to a podcast, and
            try again later.
          </i>
        </h3>
        <div className="w-full text-center pt-5">
          <Link to="/" className="btn">
            Home Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <h1>
        {" "}
        <b>
         Oooppss!
        </b>{" "}
      </h1>
      <h3>
        <i>Something went wrong here. We’re working on getting it fixed.</i>
      </h3>

      <div>
        <Link to="/" className="btn">
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
