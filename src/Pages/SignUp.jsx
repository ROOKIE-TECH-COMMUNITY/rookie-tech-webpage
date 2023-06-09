import Layout from "../Layout/Layout.jsx";
import React, {useState} from 'react';
import {InputField, PasswordInputField} from "../components/InputField";
import Image from '../assets/Group.png'
import {Link} from "react-router-dom";
import {Button} from "../components/Button.jsx";

const SignUp = () => {

    const [communityUserSignUpDetails, setCommunityUserSignUpDetails] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })

    const handleChange = (e) => {
      setCommunityUserSignUpDetails({...communityUserSignUpDetails, [e.target.name]:e.target.value})
    }

    return (
        <Layout buttonType={false} backgroundColor='white' footerBgColor='white'>
            <div className='container mx-auto'>
                <div className='py-8 text-center'>
                    <h2 className='text-black text-xl md:text-2xl font-bold'>Sign Up to Rookie Tech Community</h2>
                </div>
                <div className='my-10 md:my-28 md:flex md:my-32 md:space-x-12 md:items-center px-8 md:px-0'>
                    <div className='md:w-1/3'>
                        <form>
                            <div className='flex flex-col space-y-14 md:space-y-8 mb-4'>
                                <InputField idAttribute='firstname' name='First Name' placeholder='Bernice' type='text' required={true} onChange={handleChange}/>
                                <InputField idAttribute='lastname' name='Last Name' placeholder='ogbuefo' type='text' required={true} onChange={handleChange}/>
                                <InputField idAttribute='email' name='Email' placeholder='community@mail.com' type='email' required={true} onChange={handleChange}/>
                                <PasswordInputField name='Password' onChange={handleChange} idAttribute='password'/>
                            </div>
                            <Link to='forgotpassword' className='text-link-color '>Forgot Password</Link>
                            <Button name='Sign Up'/>
                        </form>
                        <p>Already have an account?<Link to='/auth/signin' className='text-link-color'>Sign In</Link></p>
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

export default SignUp