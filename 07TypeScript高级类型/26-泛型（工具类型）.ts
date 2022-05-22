interface Props {
  id: string
  children: number[]
}

type PartialProps = Partial<Props>

let p1: Props = {
  id: '',
  children: [1]
}
let p2: PartialProps = {
  id: '',
  children: [1, 3]
}
