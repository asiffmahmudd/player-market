import React from 'react';


const Header = (props) => {
    
    let cart = props.cart;
    let table_header = '';
    let table_footer = '';
    const removePlayer = props.removePlayer
    
    let totalSalary = 0;
    for(let i = 0; i < cart.length; i++){
        let salary = cart[i].price.split('£')[1];
        totalSalary = parseFloat(salary) + totalSalary;
    }

    if(cart.length > 0){
        table_header = <thead className="thead-dark"><tr><th scope="col">Name</th><th scope="col">Salary</th><th scope="col" >Action</th></tr></thead>;
        table_footer = <tr><td>Total Salary</td><td>£{totalSalary}</td></tr>;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Total Players: {props.totalPlayer}</h1>
                    <h2>Selected Players: {cart.length}</h2>
                    <div>
                        <table className="table">
                            {table_header}
                            <tbody>
                                {
                                    cart.map(player  => {
                                        return(
                                            <tr key={player.id}> 
                                                <td>{player.full_name}</td>
                                                <td>{player.price}</td>
                                                <td style={{color:'red', borderBottom: '1px solid #dee2e6', cursor:'pointer'}} onClick={()=>removePlayer(player.id)}>Delete</td>
                                            </tr>
                                        )
                                })
                                }
                                
                            </tbody>
                            {table_footer}
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;