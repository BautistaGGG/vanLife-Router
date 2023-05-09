/* FUNCION de AUTENTICACION */
export function requiredAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedIn")
  if (!isLoggedIn) {
    window.location.href = `/login?message=You must log in first.&redirectTo=${pathname}`
  }
  return null
}

/* DATOS fake del componente INCOME */

export const transactionsData = [
  { amount: 720, date: "Jan 3, '23", id: "1" },
  { amount: 560, date: "Dec 12, '22", id: "2" },
  { amount: 980, date: "Dec 3, '22", id: "3" },
]

/* DATOS fake del componente REVIEW */

export const reviewsData = [
  {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
  },
  {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
  },
]