import * as Styles from './styles';

function Button(props) {
  return (
    <Styles.Button href={props.link}>
        <img src={props.icon} />
        {props.name}
    </Styles.Button>
  );
}

export default Button;