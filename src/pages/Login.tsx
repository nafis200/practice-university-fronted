import { FieldValues } from "react-hook-form";
import PHForm from "../components/form/PHForm";

// import { useForm } from "react-hook-form"
import PHInput from "../components/form/PHInput";

const Login = () => {

  // const methods = useForm()
  // const { register} = methods

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <PHForm onSubmit={(onSubmit)}>
      {/* <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("userId")} />
      </div> */}

      <PHInput type="text" name="userId" label="ID"/>
      <PHInput type="text" name="password" label="password"/>

      {/* <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div> */}
    </PHForm>
  );
};

export default Login;
