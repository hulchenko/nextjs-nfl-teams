import Button from "@mui/material/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ width: "100%", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15rem" }}>
      <h1 style={{ color: "var(--sport)", fontSize: "5rem" }}>404</h1>
      <h3 style={{ fontSize: "1rem" }}>Page Not Found</h3>
      <Link href={"/"} style={{ marginTop: "1rem" }}>
        <Button variant="outlined" sx={{ color: "var(--sport)", fontWeight: "bold" }}>
          Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
