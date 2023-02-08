import PropTypes from 'prop-types'

import { Button, Li } from './ContactItem.style'

export const ContactListItem = ({ id, name, number, onDelete }) => {
    return (
        <Li>
            <p>
                {name}: {number}
            </p>
            <Button type='button' onClick={() => onDelete(id)}>
                Delete
            </Button>
        </Li>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};