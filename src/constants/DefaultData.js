import { v4 as uuidv4 } from 'uuid'
import * as Keys from './Keys'

const DefaultData = {
  initialPersonalInformation: {
    [Keys.FULL_NAME]: 'Alice Bobinson',
    [Keys.ROLE]: 'Full-stack developer',
    [Keys.EMAIL]: 'bobinson.a@pochta.ru',
    [Keys.PHONE_NUMBER]: '+995 228 044 122',
    [Keys.WEBSITE]: 'https://theodinproject.com',
    [Keys.LOCATION]: 'Somecity, Somecountry',
  },
  [Keys.WORK_EXPERIENCE]: [
    {
      id: uuidv4(),
      [Keys.JOB_TITLE]: 'Programmer',
      [Keys.WORK_PLACE]: 'Google Inc.',
      [Keys.WORK_SUMMARY]:
        'This is a work experience summary for a programmer job at Google.',
    },
    {
      id: uuidv4(),
      [Keys.JOB_TITLE]: 'Not a programmer',
      [Keys.WORK_PLACE]: 'Notgoogle Inc.',
      [Keys.WORK_SUMMARY]: `This is an another work experience summary, but for another job. Apparently it's not at Google.`,
    },
  ],
  summary: `Alice Bobinson, the Full-stack developer. This is a summary. I have no idea what to write in here. So I'll just write something. This is something. I am writing some things and these things doesn't make any sense.`,
}

export default DefaultData
