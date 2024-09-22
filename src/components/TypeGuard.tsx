interface Default {
  id: number;
  age: number;
  lastLoginDate: Date | string;
  contact: Contact;
}

type Contact =
  | string
  | number
  | string[]
  | { email: string; address?: string; phone?: number };

interface HasNicknameAndHobbyUser extends Default {
  nickName: string;
  hobby: string;
}

interface HasNameAndJobUser extends Default {
  name: string;
  job: string;
}

type Data = HasNameAndJobUser | HasNicknameAndHobbyUser;

interface PropType {
  data: Data[];
}

const TypeGuard: React.FC<PropType> = (props) => {
  const { data } = props;

  const hasNickNameAndHobbyUser = (el: Data): el is HasNicknameAndHobbyUser => {
    // return el.nickName !== undefined && el.hobby !== undefined
    // 이렇게 하면 에러가 발생함
    // Data 타입은 HasNameAndJobUser와 HasNicknameAndHobbyUser의 유니온 타입이기 때문에
    // 따라서 아래와 같이 in을 사용해서 타입 가드
    return 'hobby' in el && 'nickName' in el;
  };

  const formatDateObjToStr = (date: Date | string) => {
    if (date instanceof Date) {
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    } else {
      return date;
    }
  };

  const formatContact = (contact: Contact) => {
    if (typeof contact === 'number') {
      return <p>Phone: {contact}</p>;
    } else if (typeof contact === 'string') {
      return <p>Email: {contact}</p>;
    } else if (Array.isArray(contact)) {
      return (
        <p>
          Email:{' '}
          {contact.map((el, idx) => (
            <span>
              {el} {idx !== contact.length - 1 && '/ '}
            </span>
          ))}
        </p>
      );
    } else {
      return (
        <>
          <p>Email: {contact.email}</p>
          {contact.phone && <p>Phone: {contact.phone}</p>}
          {contact.address && <p>Phone: {contact.address}</p>}
        </>
      );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {data.map((el) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '8px',
            border: `1px solid ${hasNickNameAndHobbyUser(el) ? 'red' : 'blue'}`,
          }}
          key={el.id}
        >
          <p>ID: {el.id}</p>
          <p>age: {el.age}</p>
          <p>Last login time: {formatDateObjToStr(el.lastLoginDate)}</p>
          {hasNickNameAndHobbyUser(el) ? (
            <>
              <p>Nickname: {el.nickName}</p>
              <p>Hobby: {el.hobby}</p>
            </>
          ) : (
            <>
              <p>Name: {el.name}</p>
              <p>Job: {el.job}</p>
            </>
          )}
          {formatContact(el.contact)}
        </div>
      ))}
    </div>
  );
};

export default TypeGuard;
