import "./TabelPage.css"
import {Divider} from "semantic-ui-react";
import {SimpleTable, SimpleTableProps} from "../../Inputs/Table/SimpleTable";

export const TablePage = (props:any) => {
    const names = ["Name","Age","Job"];
    const values = [["Jhon","25","A"],["Jhon","25","A"],["Jhon","25","A"]]
    const data:SimpleTableProps = {tableColumnNames: names, tableColumnValues:values}
    //astea is exemplu de folosire

    return (
        <div className={"pageDiv"}>

            <div className={"title"}>
                {/*<label className={"titleLabel"}> {props.pageName}</label>*/}
                <label className={"titleLabel"}>Numele Pagini</label>
            </div>

            <Divider className={"divider"} />

            <div className={"tableDiv"}>
                <SimpleTable props={data}/>
            </div>
        </div>
    )
}