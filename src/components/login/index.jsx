import React from 'react';
import { useFormik } from 'formik';

import './style.less';

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <div className="wrapper__inner_right">

          <form className="form" onSubmit={formik.handleSubmit}>
            <h1 className="form__title">Хацк поинт</h1>
            <label className="form__field__label" htmlFor="email">Логин</label>
            <input
              className="form__field"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <label className="form__field__label" htmlFor="password">Пароль</label>
            <input
              className="form__field"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <button className="form__button" type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
}
