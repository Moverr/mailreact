import React from 'react';
 
class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    handleCheckbox=(e)=>{

    }
    
    getTableRowData() {
        let tableData = this.props.tableRowData;
        return <tr key={tableData["id"]}><td><input type="checkbox" onClick={this.props.handleCallBack} />{tableData["id"]}</td><td>{tableData["to"]}</td><td>{tableData["subject"]}</td> <td>{tableData["type"]}</td> </tr>;
    }
     
    render() {
         
        return (
              this.getTableRowData()
        );
    }

}


export default TableRow;
