import React from 'react';

 class Questionnaire extends React.Component{
    render(){
        return(
           
              <div>
                  <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                        <center>
                            <img src="assets/image/shabulogo.png" width={150} height={150} />
                            <br />
                            <br />
                        </center>
                        <h3 align="center">
                            {" "}
                            แบบสอบถามความพึงพอใจการสั่งอาหารร่วมกันสำหรับร้านชาบู{" "}

                            <h5>

                            <form action="/">
                         เพศ * &nbsp;
                            <input type="radio" name="gender" defaultValue="male" defaultChecked /> ชาย &nbsp;
                            <input type="radio" name="gender" defaultValue="female" /> หญิง &nbsp;
                            <input type="radio" name="gender" defaultValue="other" /> อื่นๆ
                            <br />
                        </form><br />
                        <form action="/action_page.php">
                             ช่วงอายุ * &nbsp;
                            <input type="radio" name="gender" defaultValue="age" defaultChecked /> 7 -
                            20 ปี &nbsp;
                            <input type="radio" name="gender" defaultValue="age" /> 21 - 30 ปี &nbsp;
                            <input type="radio" name="gender" defaultValue="age" /> 31 - 40 ปี &nbsp;
                            <input type="radio" name="gender" defaultValue="age" /> 50 ปีขึ้นไป
                            <br />
                            <br />
                        </form>
                        <form action="/action_page.php">
                        ท่านเคยมารับประทานอาหารที่ร้านนี้หรือไม่ * &nbsp;
                            <input type="radio" name="gender" defaultValue="age" />     เคย &nbsp;
                            <input type="radio" name="gender" defaultValue="age" /> ไม่เคย &nbsp;
                            
                            <br />
                            <br />
                        </form>

                            </h5>
                        </h3>

                        <form id="formq" name="formq" method="post" action="q_db.php">
                            <table
                            width="100%"
                            border={1}
                            align="center"
                            cellPadding={0}
                            cellSpacing={0}
                            >
                            <tbody>
                                <tr>
                                <td width="75%" rowSpan={2} align="center">
                                    <strong>รายการ</strong>
                                </td>
                                <td colSpan={5} align="center">
                                    <strong>ระดับความพึงพอใจ</strong>
                                </td>
                                </tr>
                                <tr>
                                <td width="5%" align="center">
                                    <strong>5</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>4</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>3</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>2</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>1</strong>
                                </td>
                                </tr>
                                
                                <tr>
                                <td height={30} colSpan={6} bgcolor="#F4F4F4">
                                    <strong>&nbsp; ด้านอาหาร</strong>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 1.ความสดของอาหาร</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c1"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 2.อาหารสะอาดถูกสุขลักษณะ</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c2"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 3.รสชาตน้ำจิ้ม</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c3"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 4.ท่านพึงพอใจในด้านอาหารมากน้อยแค่ไหน </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c4"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 5.ความสะดวกในการสั่งอาหาร</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c5"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30} colSpan={6} bgcolor="#F4F4F4">
                                    <strong>&nbsp; ด้านการเข้าถึงบริการของพนักงาน</strong>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 1.ความรวดเร็วในการบริการ</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d1"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 2.ความใกล้ชิดที่พร้อมจะให้บริการลูกค้าอย่างทั่วถึง
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d2"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 3.ความใกล้ชิดที่ลูกค้าสามารถสื่อสารเพื่อขอใช้บริการ
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d3"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30} colSpan={6} bgcolor="#F4F4F4">
                                    <strong>&nbsp; ด้านความปลอดภัย</strong>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 1.ความสะอาดของอุปกรณ์มาใช้บริการ</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d1"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 2.ความปลอดภัยของอุปกรณ์ในขณะที่ลูกค้าใช้บริการ
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d2"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" defaultValue={1} />
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 3.การจัดระบบความปลอดภัยเมื่อมีเหตุฉุกเฉิน
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d3"
                                    defaultValue={5}
                                    required="required"
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={4} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={3} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={2} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" defaultValue={1} />
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <br />
                            <b>&nbsp; ตอนที่ 2 ข้อเสนอแนะเพิ่มเติม </b>
                            <textarea
                            name="detail"
                            cols={90}
                            rows={3}
                            id="detail"
                            defaultValue={""}
                            />
                            <br />
                            <br />
                            <a
                                    className="w3-btn w3-blue w3-round w3-small"
                                    href="/checkbill2"
                                    >
                                    + บันทึก
                            </a>
                            &nbsp;
                            <a
                                    className="w3-btn w3-dark-grey w3-round w3-small"
                                    href="/checkbill"
                                    >
                                    ยกเลิก
                            </a>
                        </form>
                        <br />
                        <br />
                        </div>
                    </div>
                    </div>;

              </div>
        
        )
    }
}

export default Questionnaire;