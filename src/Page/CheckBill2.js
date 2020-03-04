import React from 'react';
import Logo_compo from './logo_compo';

 class CheckBill2 extends React.Component{
    render(){
        return(
           
              <div>
                  <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        
                        <div className="row">
                        <div className="container">
                            <h4 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( เช็คบิล )</h4>
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
                                    <h4>4</h4>
                                </td>
                                <td>
                                    <h4>199</h4>
                                </td>
                                <td>
                                    <h4>769.00</h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <h4>
                                    <font color="#EC0E11">ส่วนลด 5%</font>
                                    </h4>
                                </td>
                                <td>
                                    <h4>
                                    <font color="#EC0E11">-</font>
                                    </h4>
                                </td>
                                <td>
                                    <h4>
                                    <font color="#EC0E11">-</font>
                                    </h4>
                                </td>
                                <td>
                                    <h4>
                                    <font color="#EC0E11">39.00</font>
                                    </h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <h4 />
                                </td>
                                <td>
                                    <h4 />
                                </td>
                                <td>
                                    <h4 />
                                </td>
                                <td>
                                    <h4>
                                    ราคาเดิม 769.00{" "}
                                    <center>
                                        <div
                                        style={{
                                            border: "1px groove black",
                                            width: 137,
                                            height: "auto",
                                            textAlign: "right"
                                        }}
                                        >
                                        {" "}
                                        <font color="#EC0E11"> 730.00 </font>
                                        </div>
                                    </center>
                                    </h4>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <button className="btn btn-success">
                                    ทำแบบสอบถามเรียบร้อย
                                    </button>
                                </td>
                                <td />
                                <td />
                                <td>
                                    <h>
                                    <a className="w3-btn w3-blue w3-round w3-small" href="/checkbillall">
                                        ต้องการชำระเงิน
                                    </a>&nbsp;
                                    </h>
                                    <a className="w3-btn w3-dark-grey w3-round w3-small" href="/menu">
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

export default CheckBill2;