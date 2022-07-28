import BlogShortCard from '../components/BlogShortcard';
import data from '../data/articles.json';

function Articles() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Articles</h1>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              data.map((article) => <BlogShortCard key={article.id} article={article} />)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
