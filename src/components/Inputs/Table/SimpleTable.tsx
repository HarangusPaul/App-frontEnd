
export interface SimpleTableProps{
    tableColumnNames:string[];
    tableColumnValues:string[];
}

export const SimpleTable = (props:any) => {
    const data = props.props.tableColumnNames;
    return (
        <table className="ui celled table">
            <thead>
            <tr>
                {
                    data!=undefined?data.map((item:any, index:any) => (
                        <th>{data[index]}</th>
                    )):(<div/>)
                }
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="Name">James</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
            </tr>
            <tr>
                <td data-label="Name">Jill</td>
                <td data-label="Age">26</td>
                <td data-label="Job">Engineer</td>
            </tr>
            <tr>
                <td data-label="Name">Elyse</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
            </tr>
            </tbody>
        </table>
    )
}