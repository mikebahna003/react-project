import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class CheckBill extends React.Component{

    constructor(){
        super();
        this.state ={
            bill_id:"",
            data:[],
            date:"",
            time:"",
            price:0
        }
    }

    componentDidMount(){
        const bill = localStorage.getItem('bill_id');
        //console.log("bill "+bill);
        axios.post(api('getBillByID'), 
        JSON.stringify({
            'bill_id' : bill
        }))
        .then(res => {
           if(res.data != null){
 
               const data = res.data.data[0];
               const date = res.data.date;
               const time = res.data.time;
               this.setState({
                   data:data,
                   date:date,
                   time:time
               })
           }
           
        });

    }

    ClickSubmit = (e)=>{
        e.preventDefault();
        const bill = localStorage.getItem('bill_id');
        
        axios.post(api('changeStatusBill1'), 
        JSON.stringify({
            'bill_id' : bill
        }))
        .then(res => {
          if(res.data == 1){
            toast.success("กรุณาไปชำระเงินที่เคาท์เตอร์คิดเงิน !", {
                position: toast.POSITION.TOP_CENTER
            });
           
            this.props.history.push('/checkbillall');
          }
        });
    }

    render(){
        return(
           
              <div>
                  <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        <br />
                        <br />
                        <div className="row">
                        <div className="container">
                        <h4 align="left"> &nbsp;วันที่ {this.state.date} เวลา {this.state.time} ( เช็คบิล )</h4>
                            <table className="w3-table-all w3-centered">
                            <tbody>
                                <tr>
                                <th>
                                    <h4>รายการ</h4>
                                </th>
                                <th>
                                    <h4>จำนวน(คน)</h4>
                                </th>
                                <th>
                                    <h4>ราคาต่อคน</h4>
                                </th>
                                <th>
                                    <h4>ราคา</h4>
                                </th>
                                </tr>
                                <tr>
                                <td>
                                    <h4>ลูกค้า</h4>
                                </td>
                                <td>
                                <h4>{this.state.data.b_amount_people}</h4>
                                </td>
                                <td>
                                    <h4>{this.state.data.b_price}</h4>
                                </td>
                                <td>
                                    <h4>{this.state.data.b_amount_people * this.state.data.b_price}</h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                   
                                </td>
                                <td>
                                   
                                </td>
                                <td>
                                   
                                </td>
                                <td>
                                    <h4>
                                    ราคารวม{" "}
                                    <center>
                                        <div
                                        style={{
                                            border: "1px groove black",
                                            width: 97,
                                            height: "auto",
                                            textAlign: "right"
                                        }}
                                        >
                                        {this.state.data.b_amount_people * this.state.data.b_price}{" "}
                                        </div>
                                    </center>
                                    </h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <a
                                    className="w3-btn w3-teal w3-round w3-small"
                                    href="/questionnaire"
                                    >
                                    ทำแบบสอบถาม (รับส่วนลด 5%)
                                    </a>
                                </td>
                                <td />
                                <td />
                                <td>
                                   
                                    <button className="w3-btn w3-blue w3-round w3-small" onClick={this.ClickSubmit}>
                                        ต้องการชำระเงิน
                                    </button>&nbsp;
                                    
                                    <a className="w3-btn w3-dark-grey w3-round w3-small" href="#menu">
                                    ยกเลิก
                                    </a>
                                    &nbsp;
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p>&nbsp;</p>
                        </div>
                        </div>
                    </div>
                    </section>;

              </div>
        
        )
    }
}

export default CheckBill;