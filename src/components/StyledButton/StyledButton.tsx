import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    background: "transparent",
    border: `0.0625rem solid ${theme.palette.primary.contrastText}`,
    borderRadius: "0.1875rem",
    padding: "0.9375rem .9375rem",
    width: "100%",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.625rem",
  }));
  return (
    <>
      <StyledButton>{children}</StyledButton> ;
    </>
  );
};

export default StyledButton;
