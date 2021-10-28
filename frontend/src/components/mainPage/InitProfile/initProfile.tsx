import { SyntheticEvent, useState } from 'react'
import { UserService } from '../../../services/users.service'
//import { UserI } from '../../../models/user.interface'
import './initProfile.css'

export const InitProfile = () => {

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [preference, setPrefer] = useState("")
    const userService: UserService = new UserService()
    
    // useEffect(() => {

    //     const userService: UserService = new UserService()
    //     const getUser = async () => {
    //        await userService.findUser().then(res => {

    //            setUserId(res.data[0].id)
    //            setEmail(res.data[0].email)
    //        })
    //     }
    //     getUser() 
    // }, []);

    const sendData = (evt: SyntheticEvent) => {

        evt.preventDefault()
        if (name !== '')
            return userService.updateUser({name, gender, preference})
    }
    
    return (
        <div>
            <div className="profile">
                <h1 className="title">PROFILE</h1>
                <section>
                    <form className="profile_form" onSubmit={sendData}>
                        <label htmlFor="" className="field">NAME</label>
                        <input type="text" name="name" placeholder="name"
                            onChange={evt => setName(evt.target.value)}/>
                        <label htmlFor="" className="field">GENDER</label>
                        <label className="option">
                            <input type="radio" name="gender" value="male"
                                checked={gender === 'male'}
                                onChange={evt => setGender(evt.currentTarget.value)}/>
                            <span>MALE</span>
                        </label>
                        <label className="option">
                            <input type="radio" name="gender" value="female"
                                checked={gender === 'female'}
                                onChange={evt => setGender(evt.currentTarget.value)}/>
                            <span>FEMALE</span>
                        </label>
                        <label htmlFor="" className="field">PREFERENCES</label>
                        <label className="option">
                            <input type="radio" name="preference" value="homo"
                                checked={preference === 'homo'}
                                onChange={evt => setPrefer(evt.currentTarget.value)}/>
                            <span>HOMO</span>
                        </label>
                        <label className="option">
                            <input type="radio" name="preference" value="hetero"
                                checked={preference === 'hetero'}
                                onChange={evt => setPrefer(evt.currentTarget.value)}/>
                            <span>HETERO</span>
                        </label>
                        <input type="submit" value="ENVIAR" />
                    </form>
                </section>
            </div>
        </div>
    )
}

