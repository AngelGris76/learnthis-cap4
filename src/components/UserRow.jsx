const UserRow = ({ name, active, role }) => {
  return (
    <div className='user'>
      <span className='name'>{name}</span>
      <span className='active'>{active}</span>
      <span className='role'>{role}</span>
    </div>
  );
};

export default UserRow;
