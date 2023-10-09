type UserProps = {
  user: {
    firstName: string;
    lastName: string;
  }
};

function User({ user }: UserProps) {
  return (
    <span>
      {`${user.firstName} ${user.lastName}`}
    </span>
  );
}

export default User;
