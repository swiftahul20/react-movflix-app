function ArrowNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, marginRight: 135, transform: "scale(2)" }}
      onClick={onClick}
    />
  );
}

function ArrowPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 9, marginLeft: 135, transform: "scale(2)" }}
      onClick={onClick}
    />
  );
}

export { ArrowNext, ArrowPrev };
