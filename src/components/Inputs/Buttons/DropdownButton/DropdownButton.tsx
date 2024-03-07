import React from 'react'

import { Dropdown } from 'semantic-ui-react'

interface DropdownButtonProps {
    multiple: boolean;
    search: boolean;
}
const DropdownButton: React.FC<DropdownButtonProps> = ({ multiple , search}) => (
    <Dropdown
        placeholder='Skills'
        fluid
        multiple={multiple}
        selection
        search={search}
        options={options}
    />
);


export default DropdownButton