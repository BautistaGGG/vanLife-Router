import React from 'react'
import { useLoaderData, Form, useActionData, useNavigation } from 'react-router-dom'
import { loginUser } from '../../api'

export function loader({request}) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
    const formData = await request.formData()
    const emailData = formData.get("email")
    const passwordData = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try{
        const finalData = await loginUser({ email: emailData, password: passwordData })
        localStorage.setItem("loggedIn", true)
        window.location.href = pathname
        return null
    }catch(err){
        return err.message
    }
}

console.log("Ingresa estos datos en el input correspondiente para pasar la autenticación y ver la página en su totalidad / Enter this info to pass the authentication and be able to enjoy the full page")
console.log("email: testeando@algo.com - password: p123");

function Login() { 
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

    const mustLoginMessage = message && 
        <> 
            <h4 className='notLoggedIn'> {message} </h4> 
            <pre>Apreta F12 para ver la consola y ver la información necesaria</pre>
            <pre>Press F12 to open the console and get the information needed</pre> 
        </>

    const errorMessageElement = errorMessage && <h4 className='errorMessage'> {errorMessage} </h4>
    
    const buttonText = navigation.state === "submitting" ? "Loggin in..." : "Log in"

    return (
    <main className='login--main'>
        <h1>Sign in to your account</h1>
        {mustLoginMessage}
        {errorMessageElement}
        <Form method='post' replace>
            <input type="email" placeholder='Email address' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <button disabled={navigation.state === "submitting"}>
                {buttonText}
            </button>
        </Form>
        <p>Don't have an account? <span>Create one now</span> </p>
    </main>
  )
}

export default Login