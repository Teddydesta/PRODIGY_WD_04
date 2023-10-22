import '../app.css'
import { useFormik } from 'formik';
import { schema } from './contactForm/Schema';
import emailjs, {send} from 'emailjs-com'

const onSubmit=async (values:any,actions:any)=>{
  await new Promise((resolve)=>setTimeout(
    
    resolve,1000,));
 actions.resetForm();
  console.log(values,actions);
}


const Contact=()=> {

  const onSubmit=async (values:any,actions:any)=>{
  await new Promise((resolve)=>setTimeout(
    
    resolve,1000,));
    SendEmail(values)
    actions.setSubmitting(false)
    window.alert("Sed")
    actions.resetForm();
   
    
    
}
  function SendEmail(object:any) {
    emailjs.send("service_acsuqcs", "template_9x5i6ub", object,"2X1kEmQZSjXvdNvR8" )
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
    <section id='Contact' className='shadow-md bg-gray-800  h-full w-full  py-10 '>
      <div className='text-white container mx-auto flex  flex-col pl-10 sm:flex-col'>
       <center className=''>
       <h1 className='font-medium font-title font-bold text-4xl'>
          Contact Me!
        </h1>
        <hr className='w-20 border rounded-full h-1 bg-green-400 mb-4 mt-4'/>
        <p className='leading-relaxed text-center justify-center w-1/3 text-justify	' >
        I'd Love If you reached out to me. Even if It's just to
        say "Hey". Don't hesitate!. Drop me a line I will get 
        back to you as soon as possible.  

        </p>
       </center>
        <div className='w-full gap-20 sm:flex-row lg:w-2/3 sm:mx-auto sm:mb-2 -mx-4 
        flex flex-row justify-between shadow-md   mt-10 mb-10 '>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="src/assets/contact.gif" alt="Hero" 
              className=" rounded-lg  h-120 transition-all duration-300
               cursor-pointer    "/>

            </div>
         
            <form  
          
          action="" 
          autoComplete='off'
          onSubmit={handleSubmit}
          
          >
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
           className='bg-blue-500  hover:bg-blue-700 mt-5 mb-10 h-12 text-white font-bold '>
            Submit
          </button>



          </form>
         
         

        </div>
      
     
      </div>

    </section>
  );
  };
export default Contact
