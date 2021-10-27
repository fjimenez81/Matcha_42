import React, { SyntheticEvent, useState } from "react";
import { Redirect } from 'react-router-dom';
import "./homePage.css"
import { UserService } from "../../../services/users.service";

export const HomePage = () => {

    const userService: UserService = new UserService()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const register = async (evt: SyntheticEvent) => {

        evt.preventDefault()
        if (email !== '' && password !== '')
        {
            await userService.createUser(email, password)
                .then((res) => {
                    if (res.data.message === 'failed')
                        return
                    setEmail("")
                    setPassword("")
                    setRedirect(true)
                    
                })
        }
    }

    if (redirect)
        return <Redirect to={"/initProfile"}/>

    return (
        <div>
            <div className="home">
                <section>
                    <h1 className="startTitle">MATCHA</h1>
                    <form onSubmit={register}>
                        <input type="email" name="email" placeholder="e-mail"
                            onChange={evt => setEmail(evt.target.value)} required/>
                        <input type="password" name="password" placeholder="password"
                            onChange={evt => setPassword(evt.target.value)} required/>
                        <input type="submit" value="REGISTER"/>
                    </form>
                </section>
            </div>
        </div>
    )
}