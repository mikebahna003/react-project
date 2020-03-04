import React from 'react';
import axios from 'axios';
import api from '../Url_api';
import Logo_compo from './logo_compo';

 class Menulist3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            table_id: 1
        
        }
     
    }


    componentDidMount(){
        
        this.onPageChange(
            api('getOrderfoodbytableStatus2')
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
                        <h5 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( รายการที่รอเสิรฟ์ )</h5>
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
                                    <h5>สถานะ</h5>
                                </th>
                                </tr>

                                {//-----------------------------------
                                  this.state.data.map( function(obj, i){
                                    return(
                                
                            <tr key={i}>
                                <td>{obj.o_id}</td>
                                <td>
                                    <h6>{obj.f_name}</h6>
                                </td>
                                <td>
                                    <h6>{obj.o_amount}</h6>
                                </td>
                                <td>
                                    <lable type="text" className="btn btn-success">
                                    {obj.o_status =='preparing' ?'รอเสิร์ฟ':''}
                                    {obj.o_status =='finished' ?'เสิร์ฟแล้ว':''}
                                    
                                    </lable>
                                </td>
                                </tr>
                            )

                            })
                                
                            //-----------------------------------
                            }
                                <tr>
                                <td />
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td colSpan={2}>
                                    <br />
                                    {/* <button type="button" class="btn btn-primary">ยืนยัน</button> */}
                                    {/* <button type="button" class="btn btn-danger">ยกเลือกการเลือกทั้งหมด</button>
                                <button type="button" class="btn btn-danger">ยกเลิอกรายการสั่งทั้งหมด</button> */}
                                    <a className="w3-btn w3-dark-grey w3-round w3-small" href="/menu">
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

export default Menulist3;