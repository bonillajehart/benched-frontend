import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Not found.</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFound;
