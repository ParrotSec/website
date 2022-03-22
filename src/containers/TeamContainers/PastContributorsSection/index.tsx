import { GridProps } from '@mui/material'

import pastcontrib from './pastcontrib'

import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const pastContribData = pastcontrib.map((data, i) => (
  <UserCard
    variant="background"
    key={`id-${i}`}
    name={data.name}
    nickname={data.nickname}
    role={data.role}
  />
))

const PastContributors = (props: GridProps) => {
  return (
    <ContributorsSection
      heading="Past Contributors"
      title="Legacy Contributors"
      subtitle="Here are all those who have dedicated part of their time in the past to contribute to The Parrot Project."
      {...props}
    >
      {pastContribData}
    </ContributorsSection>
  )
}

export default PastContributors
