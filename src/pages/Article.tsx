import data from '../data/articles.json';
import { useParams } from 'react-router-dom';

function Article({id = 1}) {
  const params = useParams();
  const d: any = data.find(a => a.id === Number(params.id));
  
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{d.title}</h1>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <p>{d.full_text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
