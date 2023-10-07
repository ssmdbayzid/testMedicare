export const setAuthToken = (user) => {
    // const currentUser = {
    //     email: user.email,
    // }
    fetch(`${process.env.REACT_APP_BASE_URL}auth/login`, {
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>  res.json())
    .then(data => {
        console.log(data)

        // localhost is the easiest but not the best place to store jwt token

        localStorage.setItem("auth-token", data.token)
    })
}
