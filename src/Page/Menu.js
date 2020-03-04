import React from 'react';
import Menu_compo from './menu_compo';
import Logo_compo from './logo_compo';

 class Menu extends React.Component{
    render(){
        return(
                <section className="section">
                    <div className="container" align="center">
                        <br />
                       <Logo_compo />
                        <br />
                        <br />
                        <Menu_compo />
                        {/* <Menu_compo data="test2" />
                        <Menu_compo data="test3" />
                        <Menu_compo data="test4" />
                        <Menu_compo data="test5" />
                        <Menu_compo data="test6" /> */}

                    </div>
                </section>
        
        )
    }
}

export default Menu;