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

function Login() { 
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

  return (
    <main className='login--main'>
        <h1>Sign in to your account</h1>
        {message && <h4 className='notLoggedIn'> {message} </h4>}
        {errorMessage && <h4 className='errorMessage'> {errorMessage} </h4>}
        <Form 
            method='post' 
            replace
        >
            <input 
                type="email" 
                placeholder='Email address'
                name='email'
            />
            <input 
                type="password" 
                placeholder='Password'
                name='password'
            />
            <button disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? 
                    "Loggin in..." : 
                    "Log in"
                }
            </button>
        </Form>
        
        <p>Don't have an account? <span>Create one now</span> </p>
    </main>
  )
}

export default Login