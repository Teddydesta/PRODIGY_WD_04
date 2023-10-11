import * as yup from 'yup'

export const schema=yup.object().shape({
    fullName:yup.string().min(2,'Too short').max(50,'Too long').required('Required'),
   
    email:yup.string().email('invalid Email').required('Required'),
    message: yup.string().min(10,'Too Short').max(100,'Message too long ').required('Required')
    
})