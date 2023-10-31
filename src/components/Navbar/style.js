// SignUp/styles.js
export const styles = {
  drawerDiv: {
    backgroundColor: "inherit",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: "auto",
    height: "70px",
  },
  box: {
    position: "absolute",
    bottom: "0",
    left: "0",
  },
  iconButton: {
    display: { xs: "block", md: "none" },
    marginRight: "10px",
  },
  navbarBox: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  listItemButton: (isSelected, path) => ({
    textAlign: "center",
    textDecoration: isSelected(path) ? "underline" : "none",
  }),
  boxLogout: {
    marginTop: "auto",
  },
  avatarIconButton: { p: 3 },
  appBar: { backgroundColor: "#EEEEEE" },
  drawerButtons: (isSelected, path) => ({
    color: "black",
    textDecoration: isSelected(path) ? "underline" : "none",
  }),
  boxOfLeftMargin: {
    marginLeft: "auto",
  },
  logoutButton: {
    color: "black",
  },
  divider: {
    my: 1,
  },
};
