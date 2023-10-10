import Cookies from "js-cookie";

const handleLogout = (navigateToLogin) => {
  Cookies.remove("token");
  Cookies.remove("roleId");
  Cookies.remove("roleName");
  navigateToLogin(); // Call the function passed as an argument to handle navigation
};

export default handleLogout;
