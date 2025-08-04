import{useForm} from 'react-hook-form'
import { DevTool } from "@hookform/devtools";

export const PokemonForm = () => {

const Form = useForm()
    const{register ,  control , handleSubmit , formState} = Form
  
const {errors} = formState

console.log(errors.username)

  const onSubmit= (data)=>{
console.log(data)
  }
  
    return (    
    <div style={{
  display:"flex",
  gap:"1rem"

    }}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" style={{
            fontSize:"2rem"
        }}>UserName</label>
        <input type="text" id="username"  {...register("username",{
          required:{
           value:true,
           message:"username req"
          }
        }) } />
       <div> {errors.username}</div>
        <label htmlFor="email" style={{
            fontSize:"2rem"
        }}>Email</label>
        <input type="Email" id=" Email" {...register("Email")} />
        <button >supmit</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
};
