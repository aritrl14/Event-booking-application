const Card = ({ img, title, venue, category, charges, eventtype }) => {
    return (
      <>
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="venue">
              {venue}
              <span className="category">{category}</span>
            </section>
            <section className="card-price">
              <div className="charges">
                <del>{charges}</del>
              </div>
              <div className="bag">
                <p>{eventtype}</p>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  };
  export default Card;