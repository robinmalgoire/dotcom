import { FunctionComponent as FC } from 'preact'

import Box from 'common/Box'

const Index: FC<{ ssg: string }> = ({ ssg }) => (
  <div>
    <Box>{ssg}</Box>
  </div>
)

export const getStaticProps = () => ({ props: { ssg: 'auto deploy' } })

export default Index
