import { useFormContext } from "react-hook-form";

const PHInput = ({type, name, label}) => {
  const { register } = useFormContext();
  return <>
   {label ? label : null}
   <input type={type} {...register(name)} />;
  </>
};

export default PHInput;
