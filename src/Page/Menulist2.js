import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';

 class Menulist2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            table_id: 1
        
        }
     
    }

    componentDidMount(){
        
        this.onPageChange(
            api('getOrderfoodbytableStatus1')
        );
       
    }

    onPageChange(url){
        axios.post(url, 
            JSON.stringify({
                'table_id' : this.state.table_id
            }))
      .then(res => {
          this.setState({
              data:res.data
          })
      })
    }
    
    render(){
        return(
           
              <div>
                  <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        <div className="row">
                        <div className="container">
                        <h5 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( รายการที่สั่งทั้งหมด )</h5>
                            <table className="w3-table-all w3-centered">
                            <tbody>
                                <tr>
                                <th>
                                    <h5>ลำดับที่สั่ง</h5>
                                </th>
                                <th>
                                    <h5>รายการที่สั่ง</h5>
                                </th>
                                <th>
                                    <h5>จำนวน(ถาด)</h5>
                                </th>   
                                <th>
                                    <h5>เวลาที่สั่งอาหาร</h5>
                                </th>
                                
                                <th>
                                    <h5>สถานะ</h5>
                                </th>
                                </tr>

                                   {//-----------------------------------
                                  this.state.data.map( function(obj, i){
                                    return(
                                
                            <tr key={i}  data-toggle="modal" data-target="#myModal">
                                <td>{obj.o_id}
                                
                                </td>
                                <td>
                                    <h6>{obj.f_name}</h6>
                                </td>
                                <td>
                                    <h6>{obj.o_amount}</h6>
                                </td>
                                <td>
                                    <h6>{obj.o_time}</h6>
                                </td>
                                
                                <td>
                                   {
                                       obj.o_status == 'preparing' ?
                                       <lable type="text" className="btn btn-warning">

                                       {obj.o_status =='preparing' ?'รอเสิร์ฟ':''}
                                      
                                       
                                       </lable>
                                       :<lable type="text" className="btn btn-danger">

                                       
                                       {obj.o_status =='finished' ?'เสิร์ฟแล้ว':''}
                                       
                                       </lable>
                                   }
                                </td>
                                </tr>
                                )

                            })
                                
                             //-----------------------------------
                            }

                                <tr>
                                <td />
                                <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
                                <td colSpan={2}>
                                    <br />
                                    {/* <button type="button" class="btn btn-primary">ยืนยัน</button> */}
                                    {/* <button type="button" class="btn btn-danger">ยกเลือกการเลือกทั้งหมด</button>
                                <button type="button" class="btn btn-danger">ยกเลิอกรายการสั่งทั้งหมด</button> */}
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
                </section>;

              </div>
        
        )
    }
}

export default Menulist2;