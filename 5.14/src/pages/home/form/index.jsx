import React from 'react'
import { Form, Icon, Input, Button, Select,  } from 'antd'
import axios from 'axios'
import './style.less'
const { Option } = Select

export default @Form.create({
    mapPropsToFields(props){
        return {
            username:Form.createFormField({
                // value:props.data.username,
                // value:username
            }),
            age:Form.createFormField({
                // value:props.data.age,
                // value:age
            }),
            msg:Form.createFormField({
                // value:props.data.sex,
                // value:sex
            }),
        }
    }
})
class Forms extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        values.hospital=''
        values.gender=''
        console.log(values)
        axios.post('https://api.baxiaobu.com/index.php/home/v5/add',values).then(
            res=>{
                if(res.status=='200'){
                    alert("添加成功！")
                }
                console.log(res)
                // this.props.history.push('/home')

            }
        )
      }
    })
  }
  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
  render() {
    // 双向绑定
    const { getFieldDecorator } = this.props.form

    return (
        <div className="form">
            {/* <p style={{textAlign:"center",lineHeight:"10px",fontSize:"18px",fontWeight:"900"}}>登录</p> */}
            <p style={{fontSize:"30px",fontWeight:"900",color:"black"}}>Basic Form</p>
            <p style={{fontSize:"15px",fontWeight:"900"}}>Basic form elements</p>
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="Name">
                {getFieldDecorator('Name', {
                    rules: [
                    {required: true, message: '请写用户名!'},
                    {max:5,message:"长度不能大于5！"}
                    ],
                })(
                    <Input prefix={<Icon type="user" />} placeholder="Name" />,
                )}
                </Form.Item>

                

                 <Form.Item label="Age">
                 {getFieldDecorator('age', {
                    rules: [{required: true, message: '请填写年龄!'}],
                })(
                    <Input
                    placeholder="Age"
                    />,
                )}
                </Form.Item> 

                <Form.Item label="Price">
                 {getFieldDecorator('msg', {
                    rules: [{required: true, message: '请填写爱好!'}],
                })(
                    <Input
                    placeholder="Price"
                    />,
                )}
                </Form.Item> 

                
                <Button type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form>
        </div>
      
    )
  }
}