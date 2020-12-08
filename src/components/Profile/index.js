import * as Styles from './styles';

function Profile({ 
  children,
  linkProfile,
  imgLinkProfile,
  nameProfile,
  descriptionProfile,
  toogle
}) {
  return (
    <Styles.Container className={`background-${toogle}`}>
      {children}
      <a href={linkProfile}>
        <img src={imgLinkProfile} />
        <strong className={`text-${toogle}`}>{nameProfile}</strong>
        <p className={`text-${toogle}`}>{descriptionProfile}</p>
      </a>
    </Styles.Container>
  );
}

export default Profile;