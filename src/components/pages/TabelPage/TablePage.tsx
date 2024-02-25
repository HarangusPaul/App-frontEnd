import "./TabelPage.css"
import {Divider} from "semantic-ui-react";

export const TablePage = (props:any) => {
    return (
        <div className={"pageDiv"}>

            <div className={"title"}>
                {/*<label>{props.pageName}</label>*/}
                <label className={"titleLabel"}>Numele Pagini</label>
            </div>

            <Divider className={"divider"} />

            <div className={"tableDiv"}>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Job</th>
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
            </div>
        </div>
    )
}