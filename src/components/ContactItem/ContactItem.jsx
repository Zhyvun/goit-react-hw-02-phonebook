import PropTypes from 'prop-types';
import { ButtonSearch } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}:{number}
      <ButtonSearch type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </ButtonSearch>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired, 
  onDeleteContact: PropTypes.func.isRequired,
}

