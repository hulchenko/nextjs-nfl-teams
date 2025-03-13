const styles = {
  color: "salmon",
  marginTop: "15rem",
  display: "flex",
  width: "100%",
  justifyContent: "center",
};

export const Error = ({ error }: { error: Error }) => {
  if (error && error.message && !(error instanceof SyntaxError)) {
    return <p style={styles}>{error.message}</p>;
  }
  return <p style={styles}>Error occurred</p>;
};
