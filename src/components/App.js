import React, { useState, useEffect } from "react";
import tourList from "../data/tourDetails";
const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching tour data from an API
    setTimeout(() => {
      setTours(tourList);
      setIsLoading(false);
    }, 2000);
  }, []);

  const deleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="loading">
        <h2>No more tours</h2>
        <button className="btn" onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    );
  }
    return(
      <main id="main">
          <h1 className="title">Tours</h1>
      <div className="tour-list">
        {tours.map((tour) => (
          <div className="single-tour" key={tour.id}>
            <h2>{tour.name}</h2>
            <p className="tour-info">
              {tour.info.length > 200 ? (
                <>
                  {tour.info.substring(0, 200)}{" "}
                  <button onClick={() => deleteTour(tour.id)}>See More</button>
                </>
              ) : (
                tour.info
              )}
            </p>
            <p className="tour-price">$ {tour.price}</p>
            <button className="delete-btn" onClick={() => deleteTour(tour.id)}>
              Delete Tour
            </button>
          </div>
        ))}
      </div>
      </main>
    )
}
export default App;
