interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
  country: string;
}

interface PropType {
  data: UserNameAndAge[];
}

type UserNameAndAge = Pick<UserData, 'name' | 'age'>;

const Pick: React.FC<PropType> = (props) => {
  const { data } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {data.map((el: UserNameAndAge) => (
        <div style={{ border: '1px solid red', padding: '8px' }}>
          <p>Name: {el.name}</p>
          <p>Age: {el.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Pick;
