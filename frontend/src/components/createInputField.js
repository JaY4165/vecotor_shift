const createInputField = (label, value, onChange, type = "text") => (
  <div
    style={{
      overflowX: "hidden",
      marginTop: 5,
      borderRadius: "10px",
      paddingLeft: 20,
      paddingRight: 30,
    }}
  >
    <label
      style={{
        display: "block",
        marginBottom: 7,
        color: "white",
        fontSize: "small",
        fontWeight: "bold",
      }}
    >
      {label} :
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px 5px",
        outline: "none",
        backgroundColor: "#430b8a",
        border: "none",
        borderRadius: 5,
        color: "#a9a9a9",
        marginBottom: 10,
      }}
    />
  </div>
);

export default createInputField;
