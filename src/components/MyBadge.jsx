import Badge from "react-bootstrap/Badge";

function MyBadge(props) {
  return (
    <div>
      <Badge variant={props.bg}>{props.text}</Badge>
    </div>
  );
}

export default MyBadge;