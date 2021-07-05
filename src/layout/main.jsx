import React, { useState } from "react";
import { Button } from "../component/form/button";
import { Form } from "../component/form/form";
import { Input } from "../component/form/input";
import { RadioGroup } from "../component/form/radio-group";
import { Select } from "../component/form/select";
import { Table } from "../component/table";

export function Main() {
  const [state, setState] = useState(
    {
      email: '',
      country: '',
      password: '',
      gender: 0,
      datas: []
    }
  )

  function onSubmit(event) {
    event.preventDefault()
    const target = event.target

    setState((state) => ({
      datas: [
        ...state.datas,
        {
          id: new Date().getTime(),
          email: target.email.value,
          country: target.country.value,
          password: target.password.value,
          gender: target.gender.value
        }
      ],
      email: '',
      country: '',
      password: '',
      gender: '',
    }))
  }

  function onDelete(id) {
    setState((state) => ({
      datas: state.datas.filter((item) => item.id !== id)
    }))
  }

  // function render() {
    const options = [
      {
        value: 'jp',
        name: 'Japan'
      },
      {
        value: 'vn',
        name: 'Viet Nam'
      },
      {
        value: 'usa',
        name: 'USA'
      }
    ]
    const optionsRadio = [
      {
        value: 0,
        name: 'Male'
      },
      {
        value: 1,
        name: 'Female'
      }
    ]
    return (
      <main className="main">
        <div className="container">
          <h3>Registor</h3>
          <Form handleSubmit={onSubmit}>
            <Input value={state.email} label="Email" name="email"></Input>
            <Input value={state.password} type="password" label="Password" name="password"></Input>
            <Select
              value={state.country}
              label="Country"
              name="country"
              options={options}
            ></Select>
            <RadioGroup
              value={state.gender}
              label="Gender"
              name="gender"
              options={optionsRadio}
            ></RadioGroup>
            <Button>Submit</Button>
          </Form>
          <Table delete={onDelete} datas={state.datas}></Table>
        </div>
      </main>
    )
  // }
}
