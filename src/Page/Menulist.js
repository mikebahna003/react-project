import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';

class Menulist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            table_id: 1,
            food: "",
            order_id: "",
            statusDelete: ""

        }
        this.deletefoodinorder = this.deletefoodinorder.bind(this);
    }

    componentDidMount() {
        this.fetchAllData(); //เริ่มทำเป็นอันดับแรก
    }

    //แสดงข้อมูลทังหมดตามหมายเลขโต๊ะ
    fetchAllData() {
        let id = this.state.table_id;
        axios.post(api('getCheckOrder'), 
        JSON.stringify({
            'table_id' : this.state.table_id
        }))
        .then(res => {
         this.setState ({
             data:res.data
         })
        })
    }

    deletefoodinorder(orderId, foodId) {
        let url = "http://localhost/project_shabu/index.php/orderfood/deletefoodinorder?order=" + orderId + "&food=" + foodId;
        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    statusDelete: result,
                });
                console.log("data:" + this.state.statusDelete);
                this.fetchAllData() // เมื่อลบแล้วให้แสดงรายการข้อมูลที่เหลือหลังจากลบ
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                                                <h5>เลือก</h5>
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
                                            this.state.data.map(data =>

                                                <tr>
                                                    <td>
                                                        <input type="checkbox" name="vehicle1" defaultValue="Bike" />
                                                    </td>
                                                    <td>
                                                        <h6>{data.f_name}</h6>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn-go-prev">
                                                            &#x02013;
                            </button>&nbsp;
                            {/* <select name="ele_select" id="ele_select" value={data.co_amount}>
                                { data.co_amount == 1 ? <option value={1} selected>1</option> :<option value={1}>1</option>}
                                { data.co_amount == 2 ? <option value={2} selected>2</option> :<option value={2}>2</option>}
                                { data.co_amount == 3 ? <option value={3} selected>3</option> :<option value={3}>3</option>}
                                { data.co_amount == 4 ? <option value={4} selected>4</option> :<option value={4}>4</option>}
                                { data.co_amount == 5 ? <option value={5} selected>5</option> :<option value={5}>5</option>}
                                { data.co_amount == 6 ? <option value={6} selected>6</option> :<option value={6}>6</option>}
                                { data.co_amount == 7 ? <option value={7} selected>7</option> :<option value={7}>7</option>}
                                { data.co_amount == 8 ? <option value={8} selected>8</option> :<option value={8}>8</option>}
                                { data.co_amount == 9 ? <option value={9} selected>9</option> :<option value={9}>9</option>}
                                { data.co_amount == 10 ? <option value={10} selected>10</option> :<option value={10}>10</option>}
                                                           
                                                        </select> &nbsp; */}
                                                        <button type="button" class="btn btn-outline-secondary">{data.co_amount}</button> &nbsp;
                                                        
                            <button type="button" className="btn-go-next">
                                                            &#x0002B;
                            </button>
                                                    </td>
                                                    <td>
                                                        <button onClick={this.deletefoodinorder.bind("Undata", data.o_id, data.o_f_id)} className="btn btn-danger">

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
                                                    <a
                                                        className="w3-btn w3-blue w3-round w3-small"
                                                        href="/menulist2"
                                                    >
                                                        ยืนยันการสั่งาหาร
                                </a>&nbsp;
                                </h>
                                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="/menulist">
                                                    ยกเลิกการเลือกทั้งหมด
                                </a>&nbsp;
                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="/menulistcancel">
                                                    ยกเลิกรายการสั่งทั้งหมด
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
                </section>

            </div>

        )
    }
}

export default Menulist;