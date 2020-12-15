import React, { PureComponent } from "react"
import TableView from "./Table.view"

class Table extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            selectedKey: null
        }
    }
    // select the row
    onClickRow = (record, rowIndex) => {
        return {
            onClick: () => {
                this.setState({
                    selectedKey: record.key ? record.key : null
                })
            }
        }
    }



    setRowClassName = (record) => {

        return record.key === this.state.selectedKey ? 'clickRowStyl' : '';
    }
    render() {
        const {data, columns, className } = this.props
        const { selectedKey } = this.state
        return(
            <TableView className={className} columns={columns} data={data} setRowClassName={this.setRowClassName} onClickRow={this.onClickRow} selectedKey={selectedKey}/>
        )
    }

}
export default Table
