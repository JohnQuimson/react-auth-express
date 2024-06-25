import React from 'react';

const PostCard = ({ title, content, imageUrl, category, tags, availble }) => {
  return (
    <>
      {availble ? (
        <>
          <div className="article">
            {/* <h3>{title}</h3>
            <div>
              <strong>Tags:</strong>
              <ul>
                {tags.map((tag, index) => (
                  <li key={`tag${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Content:</strong> {content}
            </div>
            <div className="card-image">
              <img src={imageUrl} alt="img" />
            </div>
            <h3>Category: {category}</h3> */}
            <div className="card">
              {/* <img
                src={
                  imageUrl === '' ? 'https://picsum.photos/300/200' : imageUrl
                }
                alt="img"
              /> */}
              <img src={imageUrl} alt={`img-${title}`} />

              {/* <div class="card-img-overlay">
                <h5 class="card-title">{title == '' ? 'No title' : title}</h5>
                <p class="card-text">
                  {content == '' ? 'No content' : content}
                </p>
                {tags.length === 0 ? (
                  'No tags'
                ) : (
                  <>
                    <p className="card-text">Tags</p>
                    <ul>
                      {tags.map((tag, index) => (
                        <li key={`tag${index}`}>{tag}</li>
                      ))}
                    </ul>
                  </>
                )}
                {category.length === 0 ? (
                  'No category'
                ) : (
                  <>
                    <p class="card-text">Category: {category}</p>
                  </>
                )}
              </div> */}

              <h2>{title}</h2>
              <p>{content}</p>
              <span>category: {category}</span>
              <strong>tags:</strong>
              <ul>
                {tags.map((tag, index) => (
                  <li key={`tag${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="article">
          <div className="card">
            <h4>Articolo non visibile</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
