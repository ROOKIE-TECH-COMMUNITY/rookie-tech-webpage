import React, {useState} from 'react';
import Layout from '../Layout/Layout';
import {InputField, PasswordInputField} from "../components/InputField";
import Image from '../assets/Group.png'
import {Link} from "react-router-dom";

const SignIn = () => {

    const [communityUserSignInDetails, setCommunityUserSignInDetails] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
      setCommunityUserSignInDetails({...communityUserSignInDetails, [e.target.name]:e.target.value})
    }

    return (
        <Layout backgroundColor='white' buttonType={false}>
            <div className='container mx-auto'>
                <div className='py-6 text-center'>
                    <h2 className='text-black text-2xl font-bold'>Welcome back to Rookie Tech Community</h2>
                </div>
                <div className='md:flex my-32 md:space-x-12 md:items-center'>
                    <div className='md:w-1/3'>
                        <form>
                            <div className='flex flex-col space-y-8 '>
                                <InputField idAttribute='email' name='Email' placeholder='community@mail.com' type='email' required={true} onChange={handleChange}/>
                                <PasswordInputField name='Password' onChange={handleChange} idAttribute='password'/>
                            </div>
                            <Link to='forgotpassword' className='text-link-color'>Forgot Password</Link>

                        </form>
                    </div>
                    <div className='hidden md:flex w-2/3 '>
                        <div  className='w-full'>
                            <img src={Image} alt='Sign In Image' className=''/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignIn;