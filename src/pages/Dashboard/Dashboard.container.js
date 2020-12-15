import React, { PureComponent } from "react"
import DashboardView from "./Dashboard.view"
import {connect} from "react-redux";

class Dashboard extends PureComponent{
    constructor(props) {
        super(props)
    }
    columns = () => {
        return [
            {
                title: "Date",
                dataIndex: "date",
                showSorterTooltip: false,
                width: "20%",
                align: "center"
            },
            {
                title: "Particulars",
                dataIndex: "particulars",
                showSorterTooltip: false,
                width: "44%",
                align: "center",
                render: data => <span style= {{ display:"flex", justifyContent: "center", flexDirection: "column" }} key={data}>
                    <span>{data.title}</span>
                    <span style= {{ color: "#00524E", paddingTop: "5px" }}>{data.data}</span>
                </span>
            },
            {
                title: "Debit",
                dataIndex: "debit",
                showSorterTooltip: false,
                width: "12%",
                align: "center",
                render: data =>
                    <span style= {{ color: "#AD0A30" }} key={data}>{data}</span>
            },
            {
                title: "Credit",
                dataIndex: "credit",
                showSorterTooltip: false,
                width: "12%",
                align: "center",
                render: data => <span style= {{ color: "#00524E" }} key={data}>{data}</span>
            },
            {
                title: "Balance",
                dataIndex: "balance",
                showSorterTooltip: false,
                width: "12%",
                align: "center"
            }
        ]
    }

    get generateProps (){
        let credit = 0
        let debit = 0
        const { parties } = this.props
        const x = parties.map(item=> {
            credit = parseInt(credit) + parseInt(item.credit)
            debit = parseInt(debit) + parseInt(item.debit)
            const balance = (parseInt(credit) - parseInt(debit))
            return {
                key: 1,
                date:item.date,
                particulars: { title: item.particulars, data: item.category },
                debit: item.debit,
                credit: item.credit,
                balance: balance
            }
        })
        return {
            columns: this.columns(),
            printRecept: this.printRecept,
            data: x
        }
    }
    printRecept = () => {
        try {
            if (window) {
                window.print()
            }
        }
        catch (e) {
            console.log("print", e)
        }

    }
    render() {
        return <DashboardView { ...this.generateProps} />
    }

}
const mapStateToProps = ({Dashboard}) => ({
 parties: Dashboard.parties
})

const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
