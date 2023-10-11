import * as C from './QualificationsItems.styles'

type Props = {
    title: string;
    status: string;
    un: string;
}

const QualificationsItems = ({title, status, un}: Props) => {
  return (
    <C.Container>
        <h2>{title}</h2>
        <p>{status}</p>
        <span>{un}</span>
    </C.Container>
  )
}

export default QualificationsItems