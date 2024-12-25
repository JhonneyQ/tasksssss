import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';

const BasicExample = () => (

    // let userSchema = object({
    //     name: string().required(),
    //     age: number().required().positive().integer(),
    //     email: string().email(),
    //     website: string().url().nullable(),
    //     createdOn: date().default(() => new Date()),
    //   });

    //   let user = await userSchema.validate(await fetchUser());
    //   type User = InferType<typeof userSchema>
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ id: '', description: '', name: '' }}
      onSubmit={async (values, actions) => {
        await axios.post(`https://northwind.vercel.app/api/categories`, values)
        
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="number"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.id}
            name="id"
          />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.description}
            name="description"
          />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>

        
      )}
    </Formik>
  </div>
);

export default BasicExample