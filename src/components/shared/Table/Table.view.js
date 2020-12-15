import React, { memo } from "react"
import "./table.stylesheet.scss"
import { Table, Typography, Row } from "antd"
const { Text } = Typography
const TableView = memo(({ columns, data, onClickRow, setRowClassName, selectedKey }) => (
    <Row className="table-main-container">
        <Table
            className="data-table"
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 4 }}
            onRow={onClickRow}
            rowClassName={setRowClassName}
        />
    </Row>
))
export default TableView
