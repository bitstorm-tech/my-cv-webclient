import jwt from "jsonwebtoken";

const JwtUtils = {
  setJwt(jwt) {
    if (process.browser) {
      localStorage.setItem("jwt", jwt);
    }
  },

  getJwt() {
    return process.browser ? localStorage.getItem("jwt") : ""
  },

  getEscapedEmail() {
    const token = jwt.decode(this.getJwt());
    if (token) {
      return token.email.replace("@", "%40");
    }

    return "";
  }
}

export default JwtUtils;
