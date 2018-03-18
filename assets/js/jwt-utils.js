import jwt from "jsonwebtoken";

const JwtUtils = {
  setJwt(jwt) {
    localStorage.setItem("jwt", jwt);
  },

  getJwt() {
    return localStorage.getItem("jwt")
  },

  getEscapedEmail() {
    const token = jwt.decode(this.getJwt());
    return token.email.replace("@", "%40");
  }
}

export default JwtUtils;
