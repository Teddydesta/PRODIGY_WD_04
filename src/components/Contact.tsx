import '../app.css'
import { useFormik } from 'formik';
import { schema } from './contactForm/Schema';
import emailjs from 'emailjs-com'
// const [statusMessage,setStatusMessage]=useState('')

// const onSubmit=async (values:any,actions:any)=>{
//   await new Promise((resolve)=>setTimeout(
    
//     resolve,1000,));
//  actions.resetForm();
//   console.log(values,actions);
// }


const Contact=()=> {

  const onSubmit=async (values:any,actions:any)=>{
  await new Promise((resolve)=>setTimeout(
    
    resolve,1000,));
    SendEmail(values)
    actions.setSubmitting(false)
    window.alert("Sent Successfully!")
    
    actions.resetForm();
   

}
  function SendEmail(object:any) {
    emailjs.send("service_83pytwe", "template_4nzezf7", object,"BR9xc44icmQb-8fKu" )
        .then((result) => {
            console.log(result.text)

            
        }, (error) => {
            console.log(error.text)
           
        })
}
const {handleChange,values,touched,isSubmitting,handleBlur,handleSubmit,errors} = useFormik({
  initialValues: {
    fullName: "",
    
    email: "",
    message:"",
  },
  onSubmit,
  validationSchema: schema,

})

 
  return (
    <section id='Contact' className=''>
      <div className='bg-gray-900 text-white px-20 shadow-md justify-between '>
       <center className=''>
       <h1 className='font-medium font-title font-bold text-4xl'>
          Contact Me!
        </h1>
        <hr className='w-20 border rounded-full h-1 bg-green-400 mb-4 mt-4'/>
        <p className='leading-relaxed text-center  text-justify	w-2/4' >
        I'd Love If you reached out to me. Even if It's just to
        say "Hey". Don't hesitate!. Drop me a line I will get 
        back to you as soon as possible.  

        </p>
       </center>
        <div className='lg:gap-20 justify-between pb-20 lg:flex items-center justify-center mx-auto '>
        <div className="">
              <img src="/static/images/contact.gif" alt="Hero" 
              className=" rounded-md  transition-all duration-300
               cursor-pointer fit-content  "/>
        </div>         
         <form           
          action="" 
          autoComplete='off'
          onSubmit={handleSubmit}>
            <label htmlFor="fullName">FULL NAME</label>
            <input type="text"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}   
           id='fullName'
         
           className={errors.fullName && touched.fullName ?'input-error' : ""}         
            />
             {errors.fullName && touched.fullName && <p className='error'>{errors.fullName}</p>}

         
          <label htmlFor="email"> EMAIL</label>
            <input type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}   
           id='email'
             
           className={errors.email && touched.email ?'input-error' : ""}        
            />
             {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            <label htmlFor="message"> MESSAGE</label>
            <textarea             
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}   
           id='message'         
           className={errors.message && touched.message ?'input-error' : ""}        
            />
            {errors.message && touched.message && <p className='error'>{errors.message}</p>}

           <button type='submit' disabled={isSubmitting} 
           
           className='bg-indigo-500  hover:bg-blue-700 mt-5 h-12 text-white font-bold '>
            Submit
            
          </button>



          </form>
          {/* <p>{statusMessage}</p> */}
        </div>
      
     
      </div>

    </section>
  );
  };
export default Contact
