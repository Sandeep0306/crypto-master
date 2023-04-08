const SelectButton = ({ children, selected, onClick }) => {

  return (
    <span onClick={onClick} className="border-solid border-yellow-1 border-radius-5 p-2 pl-5 font-mono" style={{ cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",}}>
      {children}
    </span>
  );
};

export default SelectButton;