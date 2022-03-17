import React from 'react'
import { Form, Field } from 'formik'

function LoginForm() {
    return (
        <div>
            <Form>
                <Field type='text' name='email' placeholder='email' />
                <Field type='text' name='password' placeholder='password' />
                <button type='submite'>Login</button>
            </Form>
        </div>
    )
}

export default LoginForm