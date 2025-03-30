import * as YUP from 'yup'

const validation = YUP.object().shape({
    password: YUP.string().min(6, 'Too short!!!'),
    email: YUP.string().email('Incorrect!!!').required('Email is required!!!'),
})

export default validation 