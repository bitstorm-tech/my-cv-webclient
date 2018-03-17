export function setJwt(jwt) {
  localStorage.setItem("jwt", jwt);
}

export function getJwt() {
  localStorage.getItem("jwt")
}
