const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.icon ? <i className={props.icon}></i> : null}
      {props.children}
    </Button>
  );
};

export const ButtonSelect = (props) => {
  return (
    <button
      className={`btn-select ${props.active ? "active" : ""} ${
        props.className
      }`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.icon ? <i className={props.icon}></i> : null}
      {props.children}
    </button>
  );
};

export default Button;
