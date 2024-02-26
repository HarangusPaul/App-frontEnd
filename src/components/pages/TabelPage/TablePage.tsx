import "./TabelPage.css"
import {Divider} from "semantic-ui-react";
import {SimpleTable, SimpleTableProps} from "../../Inputs/Table/SimpleTable";

export const TablePage = (props:any) => {
    const names = ["Name","Age","Job"];
    const data:SimpleTableProps = {tableColumnNames: names, tableColumnValues: []}

    return (
        <div className={"pageDiv"}>

            <div className={"title"}>
                {/*<label>{props.pageName}</label>*/}
                <label className={"titleLabel"}>Numele Pagini</label>
            </div>

            <Divider className={"divider"} />

            <div className={"tableDiv"}>
                <SimpleTable props={data}/>
            </div>
        </div>
    )
}