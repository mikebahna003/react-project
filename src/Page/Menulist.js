import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';
import Increment from './Increment';
import {connect} from 'react-redux';

class Menulist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            table_id: 1,
            food: "",
            order_id: "",
            statusDelete: "",
            order_list:[]

        }
        this.deletefoodinorder = this.deletefoodinorder.bind(this);
    }

    componentDidMount() {
        const table_id = localStorage.getItem('table_id');
        this.setState({
            table_id:table_id
        })
        this.fetchAllData(table_id); //เริ่มทำเป็นอันดับแรก
    }

    //แสดงข้อมูลทังหมดตามหมายเลขโต๊ะ
    fetchAllData(table_id) {
        let id = table_id;
        
        axios.post(api('getOrderGroup'), 
        JSON.stringify({
            'table_id' : id
        }))
        .then(res => {
          for(var i = 0 ; i<res.data.length ; i++){
            const data = {
                id:res.data[i].co_f_id,
                name:res.data[i].f_name,
                amount:res.data[i].total_amount,
               
            }
            this.props.dispatch({
                type:'ADD_FOOD',
                data
            });
          }
        })
    }

    deletefoodinorder(food_id) {
        this.props.dispatch({
            type:'DELETE_FOOD',
            id:food_id
        });
    }
    onClickSubmit= (e) => {
        e.preventDefault();
        const table_id = this.state.table_id;
        
        const data = this.props.orders;
        axios.post(api('setOrderList'), 
        JSON.stringify({
        'table_id':table_id,
        'data':data
        }))
        .then(res => {
       
        if(res.data == 1){
            this.props.dispatch({
            type:'DESTROY_SESSION'
        });
        this.props.history.push('/menu');
        }
        })
        
    }
    

    render() {
        return (

            <div>
                {/* <button onClick={this.hello} className="btn btn-danger">click</button> */}
                <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        <div className="row">
                            <div className="container">
                                <h5 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( รายการที่สั่ง )</h5>
                                <table className="w3-table-all w3-centered">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h5>ลำดับ</h5>
                                            </th>
                                            <th>
                                                <h5>รายการที่สั่ง</h5>
                                            </th>
                                            <th>
                                                <h5>จำนวน(ถาด)</h5>
                                            </th>
                                            <th>
                                                <h5>ลบ</h5>
                                            </th>
                                        </tr>
                                        
                                        {//-----------------------------------
                                        this.props.orders == undefined ? "":
                                            this.props.orders.map((order,idx) =>

                                                <tr key={idx}>
                                                    <td>
                                                        <h6>{idx+1}</h6>
                                                    </td>
                                                    <td>
                                                        <h6>{order.name}</h6>
                                                    </td>
                                                    <td>
                                                    <Increment id={order.id} name={order.name} amount={order.amount}/>
                                                    </td>
                                                    <td>
                                                        <button onClick={this.deletefoodinorder.bind("Undata", order.id)} className="btn btn-danger">

                                                            ลบ
                                </button>
                                                    </td>

                                                </tr>


                                            )

                                        }


                                        <tr>
                                            <td align="right">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td colSpan={2}>
                                                <h>
                                                    <button onClick={this.onClickSubmit}
                                                        className="w3-btn w3-blue w3-round w3-small"
                                                        
                                                    >
                                                        ยืนยันการสั่งาหาร
                                </button>&nbsp;
                                </h>
                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="#menulistcancel">
                                                    ยกเลิกรายการสั่งทั้งหมด
                                </a>&nbsp;
                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="#menu">
                                    ย้อนกลับ
                            </a>
                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
    orders : state
    }
  }

export default connect(mapStateToProps)(Menulist);