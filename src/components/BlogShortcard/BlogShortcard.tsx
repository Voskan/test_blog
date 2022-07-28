import React from 'react';
import BlogShortcardProps from './BlogShortcard.props';


const BlogShortcard: React.FC<BlogShortcardProps> = (props: BlogShortcardProps): JSX.Element => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src='https://via.placeholder.com/250' alt="blog" />

        <div className="card-body">
          <p className="card-text">{props.article.short_text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={`/articles/${props.article.id}`} type="button" className="btn btn-sm btn-outline-secondary">View</a>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShortcard;
