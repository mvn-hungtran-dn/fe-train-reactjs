import React from "react";
import { Button } from "../component/form/button";
import { Form } from "../component/form/form";
import { Input } from "../component/form/input";
import { RadioGroup } from "../component/form/radio-group";
import { Select } from "../component/form/select";
import { Table } from "../component/table";

export class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      country: '',
      password: '',
      gender: '',
      datas: []
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const target = event.target
    this.setState((state) => ({
      datas: [
        ...state.datas,
        {
          id: new Date().getTime(),
          email: target.email.value,
          country: target.country.value,
          password: target.password.value,
          gender: target.gender.value
        }
      ]
    }))
    console.log(target.gender)
  }

  onDelete = (id) => {
    this.setState((state) => ({
      datas: state.datas.filter((item) => item.id !== id)
    }))
  }

  render() {
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
          <Form handleSubmit={this.onSubmit}>
            <Input value={this.state.email} label="Email" name="email"></Input>
            <Input value={this.state.password} type="password" label="Password" name="password"></Input>
            <Select
              value={this.state.country}
              label="Country"
              name="country"
              options={options}
            ></Select>
            <RadioGroup
              value={this.state.gender}
              label="Gender"
              name="gender"
              options={optionsRadio}
            ></RadioGroup>
            <Button>Submit</Button>
          </Form>
          <Table delete={this.onDelete} datas={this.state.datas}></Table>
        </div>
      </main>
    )
  }
}
