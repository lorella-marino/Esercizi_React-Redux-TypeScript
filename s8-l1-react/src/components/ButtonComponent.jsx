const ButtonComponent = function (props) {
  return (
    <div className="container m-auto p-5 text-center">
      <button type="button" className="btn btn-primary">
        {props.ButtonTitle}
      </button>
    </div>
  );
};

export default ButtonComponent;
