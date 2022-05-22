interface Props {
  id: string
  title: string
  children: number[]
}

type PickProps = Pick<Props, 'id' | 'title'>
