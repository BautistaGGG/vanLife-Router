export function requiredAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedIn")
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    window.location.href = `/login?message=You must log in first.&redirectTo=${pathname}`
  }
  return null
}