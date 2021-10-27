import { useEffect, useState } from 'react'
import { UserService } from '../../../services/users.service'
//import { UserI } from '../../../models/user.interface'
import './initProfile.css'

export const InitProfile = () => {

    const [userId, setUserId] = useState(0)
    const [email, setEmail] = useState("")
    
    useEffect(() => {

        const userService: UserService = new UserService()
        const getUser = async () => {
           await userService.findUser().then(res => {

               setUserId(res.data[0].id)
               setEmail(res.data[0].email)
           })
        }
        getUser() 
    }, []);
    
    return (
        <div>
            <div className="profile">
                <h1 className="title">PROFILE</h1>
                <h1>userID: {userId}</h1>
                <h1>user Email: {email}</h1>
            </div>
        </div>
    )
}

