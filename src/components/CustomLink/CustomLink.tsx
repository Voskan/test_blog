import { Link, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }: any) {

  const match = useMatch(to);
  console.log(match);
  

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match ? 'tomato': 'orange'
      }}>
      { children }
    </Link>
  );
}

export default CustomLink;
