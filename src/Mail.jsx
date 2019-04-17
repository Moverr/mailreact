
import React from 'react';
import PropTypes from 'prop-types';
import Tablerow from './Tablerow';

class Mail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>INBOX </h1>
                <table>
                    

                    <tr>
                        <th></th>
                        <th>TOPIC</th>
                        <th>FROM</th>
                        <th>DATE CREATED </th>
                    </tr>
                    
                   
                    <tbody>
                      <Tablerow />
                      
                      
                    </tbody>

                </table>
            </div>
        );
    }
}

 

export default Mail;
