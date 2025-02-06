const Loading = ({ isLoading }) =>
  isLoading ? (
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : null;

export default Loading;
