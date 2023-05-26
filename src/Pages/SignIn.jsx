import React, {useState} from 'react';
import Layout from '../Layout/Layout';
    import {InputField, PasswordInputField} from "../components/InputField";
    import Image from '../assets/Group.png'
    import {Link} from "react-router-dom";
    import {Button} from "../components/Button.jsx";

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
                <div className='py-8 text-center'>
                    <h2 className='text-black text-xl md:text-2xl font-bold'>Welcome back to Rookie Tech Community</h2>
                </div>
                <div className='my-12 md:my-28 md:flex md:my-32 md:space-x-12 md:items-center px-8 md:px-0'>
                    <div className='md:w-1/3'>
                        <form>
                            <div className='flex flex-col space-y-10 md:space-y-8 mb-4'>
                                <InputField idAttribute='email' name='Email' placeholder='community@mail.com' type='email' required={true} onChange={handleChange}/>
                                <PasswordInputField name='Password' onChange={handleChange} idAttribute='password'/>
                            </div>
                            <Link to='forgotpassword' className='text-link-color '>Forgot Password</Link>
                            <Button name='Sign In'/>
                        </form>
                        <p>Don't have an account?<Link to='/auth/signup' className='text-link-color'>Sign Up</Link></p>
                    </div>
                    <div className='hidden md:flex w-2/3 '>
                        <div  className='w-full flex justify-center'>
                            <img src={Image} alt='Sign In Image' className='w-[89%]'/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignIn;