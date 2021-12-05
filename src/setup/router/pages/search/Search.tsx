export const Search = () => {
  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__faster">
        <h1 className="display-4">Search</h1>
        <hr />

        <div className="row">
          <div className="col-12 col-md-5 mt-3">
            <h4>Search</h4>
            <hr />

            <form>
              <input
                type="text"
                placeholder="Search a gnome..."
                className="form-control"
                name="searchText"
                autoComplete="off"
              />

              <button className="btn btn-outline-primary mt-3" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="col-12 col-md-7 mt-3">
            <h4>Results</h4>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
