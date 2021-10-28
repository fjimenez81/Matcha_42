import axios from "axios"
//import { UserI} from '../models/user.interface'

export class UserService
{

    async createUser(email: string, password: string)
    {
        return await axios.post('http://localhost:5000/users/createUser', { email, password })
    }

    async findUser()
    {
        return await axios.get('http://localhost:5000/users/findUser')
    }

    async updateUser(data: any)
    {
        return await axios.put('http://localhost:5000/users/updateUser', {data})
    }
}