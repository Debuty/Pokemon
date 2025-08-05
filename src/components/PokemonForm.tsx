import {  FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button,  TextField } from "@mui/material";
import {z} from "zod"
import{zodResolver}from "@hookform/resolvers/zod" 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./UserNameSlice";



export const PokemonForm = () => {
const Navigate = useNavigate()

const dispatch = useDispatch()
const schema = z.object({
  username: z.string().nonempty("User Name Is required").regex( /^[A-Z].*$/, "Invalid username format"),
  email : z.email("Eamil Format is not vaild").nonempty("Email Name Is required")
})

interface FormFields{
  email:string,
  username:string
}

  const Form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
     resolver:zodResolver(schema),
    //  mode:'onChange'
  });
  const { register, control, handleSubmit, formState } = Form;

  const { errors  } = formState;



  const onSubmit = (data: FormFields) => {
        dispatch(addUser(data.username))
        Navigate("/Pokemon")
  };
   
  return (
    <FormProvider {...Form}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding:"1rem"
          }}
        >
          <TextField
            variant="filled"
            label="Username"
            sx={{
              "& .MuiInputBase-input": {
             height:"3rem",
             width:"23rem",
             fontSize:"2rem"
            },
            "& .MuiFormLabel-root": {
             fontSize:"2rem"
             },
            }}
            {...register("username")}
          />
          <div style={{ fontSize: "2rem", color: "red" }}>
            {" "}
             {errors.username?.message?.toString()} 
          </div>

          <TextField
            variant="filled"
            label="Email"
            sx={{
              "& .MuiInputBase-input": {
             height:"3rem",
             width:"23rem",
             fontSize:"2rem"
            },
            "& .MuiFormLabel-root": {
              fontSize:"2rem"
              },
            }}
            {...register("email")}
          />
          <div style={{ fontSize: "2rem", color: "red" }}>
            {" "}
             {errors.email?.message?.toString()}
          </div>

          <Button variant="contained" type="submit" 
          sx={{
            height:"5rem"
          }}>
            supmit
          </Button>
        </form>
        <DevTool control={control} />
      </div>
    </FormProvider>
  );
};
