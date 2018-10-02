import React from 'react';
import CustomTable from './common/CustomTable.jsx'

var Contact = React.createClass({
    getInitialState:function () {
      return {
          data:[
              {
                  firstname:'Sahil',
                  lastname:'Goyal',
                  email:'xyz@gmail.com'
              },{
                  firstname:'Hari',
                  lastname:'Reddy',
                  email:'hari@gmail.com'
              },{
                  firstname:'Seema',
                  lastname:'Bansal',
                  email:'seema@gmail.com'
              }
          ]
      }
    },
    render: function () {
        return (
            <div>
                <input type="text" className="form-control" placeholder="Enter Your First Name"/>
                <input type="text" className="form-control" placeholder="Enter Your Last Name"/>
                <input type="email" className="form-control" placeholder="Enter Your Email"/>
                <input type="button" className="btn btn-primary" value='Register'/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>S N</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CustomTable info={this.state.data}></CustomTable>
                    </tbody>
                </table>

            </div>
        )
    }
});
module.exports = Contact;