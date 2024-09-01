const createSelectField = (label, value, onChange, options) => (
  <div
    style={{
      overflowX: "hidden",
      borderRadius: "10px",
      marginTop: 5,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    }}
  >
    <label
      style={{
        display: "block",
        marginBottom: 7,
        marginTop: 10,
        color: "white",
        fontSize: "small",
        fontWeight : "bold"
      }}
    >
      {label}:
    </label>
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px 2px",
        backgroundColor: "#430b8a",
        border: "none",
        borderRadius: 5,
        color: "#a9a9a9",
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default createSelectField;
