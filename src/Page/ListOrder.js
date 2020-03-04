import React from 'react';

 class ListOrder extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            table_id: 1,
            food:"",
            order_id:""
        
        }
     
    }
    


    setStateFood = input => e => {
        e.prevanDefault();
        this.setState(
            {
                food: input
            }
        )
        this.deletefoodinorder();
    }

    deletefoodinorder() {
alert("click");
        let order = this.state.order_id;
        let food = this.state.f_id;
        this.onPageChange(
            "http://localhost/project_shabu/index.php/orderfood/deletefoodinorder?order=" + order + "&food=" + food
        );
    

    }
    

    onPageChange(url) {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                data: result,
                order_id: result.o_id
            });
            console.log("data:" + this.state.data);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render(){
        return(
           
        <div>
            
                            
                                {
                                //-----------------------------------
                                  this.state.data.map( data => 
                                
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
                            <select name="ele_select" id="ele_select" value={data.o_amount}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>&nbsp;
                            <button type="button" className="btn-go-next">
                            &#x0002B;
                            </button>
                            </td>
                            <td>
                                <button onClick={this.deletefoodinorder} className="btn btn-danger">
                                ลบ
                                </button>
                            </td>
                            
                            </tr>
                                  )



                         
                      //-----------------------------------
                                }
                
                           
                            
        </div>
        
        )
    }
}

export default ListOrder;