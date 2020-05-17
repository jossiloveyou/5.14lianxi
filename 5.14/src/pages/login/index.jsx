import React from 'react'
import { Form, Icon, Input, Button, } from 'antd'
import axios from 'axios'
import './style.less'

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
            sex:Form.createFormField({
                // value:props.data.sex,
                // value:sex
            }),
            boy:Form.createFormField({
                // value:props.data.boy
                // value:age
            }),
        }
    }
})
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        axios.post('http://api.baxiaobu.com/index.php/home/v1/login',values).then(
            res=>{
                if(res.status=='200'){
                    alert("登录成功！")
                }
                console.log(res)
                localStorage.setItem('islogin',666)
                // this.props.history.push('/home')

            }
        )
      }
    })
  }
  render() {
    // 双向绑定
    const { getFieldDecorator } = this.props.form

    return (
        <div className="login">
            {/* <p style={{textAlign:"center",lineHeight:"10px",fontSize:"18px",fontWeight:"900"}}>登录</p> */}

            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [
                    {required: true, message: '请写用户名!'},
                    {max:5,message:"长度不能大于5！"}
                    ],
                })(
                    <Input prefix={<Icon type="user" />} placeholder="Username" />,
                )}
                </Form.Item>

                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: '请填写密码!'}],
                })(
                    <Input
                    prefix={<Icon type="lock" />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>

                

                

                <Button type="primary" htmlType="submit" >
                    登录
                </Button>
            </Form>
        </div>
      
    )
  }
}