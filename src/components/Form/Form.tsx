import classes from "./Form.module.css";
import axios from "axios";
import { userSchema } from "../../Validations/User-validation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../../../types/form-values";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.post("http://localhost:3004/feedback", { ...data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes["form"]}>
      <Input
        register={register("name")}
        placeholder='Name'
        hasError={!!errors.name}
      />
      <Input
        register={register("phone")}
        placeholder='Phone'
        hasError={!!errors.phone}
      />
      <Input
        register={register("email")}
        placeholder='E-mail'
        hasError={!!errors.email}
      />
      <Button type='submit' size='1' text='Send' />
    </form>
  );
};

export default Form;
