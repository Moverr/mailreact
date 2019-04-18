
import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './Tablerow';
import { randomFill } from 'crypto';

class Mail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getSelectedRecords = ()=>{
        alert("interesting");
    }

    getMailRecords = () => {
        let mailbox = this.props.mailbox;

        let rows = [];
        mailbox.forEach(record => {
            console.log(record);
            let row = <TableRow handleCallBack= {this.getSelectedRecords} key={record['id']} tableRowData={record} />;
            rows.push(row);

        });

        return rows;

    }
    render() {

        return (
            <div>

                <h1>INBOX </h1>
                <table>

                   
                        <tr>
                            <th></th>
                            <th>TO</th>
                            <th>FROM</th>
                            <th>TYPE </th>
                        </tr>
                     

                    <tbody>
                        {this.getMailRecords()} 
                    </tbody>

                </table>
            </div>
        );
    }
}



export default Mail;
