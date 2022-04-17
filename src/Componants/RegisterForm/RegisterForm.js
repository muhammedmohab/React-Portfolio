import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  const genderOptions = [
    { value: "man", label: "Male" },
    { value: "woman", label: "Female" },
  ];
  const namesOptions = [
      { "value": 1, "label": "Sax" },
      { "value": 2, "label": "Nicholas" },
      { "value": 3, "label": "Sadie" },
      { "value": 4, "label": "Raphaela" }
    ];

  return (
    <div className="container form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <Controller
          name="gender"
          control={control}
          rules = {{required: true}}
          render={({ field }) => <Select
                        name="gender"
                        {...field}
                        options={genderOptions}
            />}
          />
          {errors.gender && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="multi">Multi</label>
          <Controller
          name="multi"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Select
                        name="multi"
                        isMulti
                        {...field}
                        options={namesOptions}
            />}
          />
          {errors.gender && <span>This field is required</span>}
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
  // return(<div><p>zebi</p></div>)
}

export default RegisterForm;