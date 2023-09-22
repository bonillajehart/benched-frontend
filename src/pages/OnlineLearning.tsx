import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const OnlineLearning = () => {
  const [openInfo, setOpenInfo] = useState(true);
  return (
    <div>
      <Accordion
        className="max-w-6xl"
        open={openInfo}
        icon={
          openInfo ? (
            <ChevronDownIcon className="w-6 h-6" />
          ) : (
            <ChevronUpIcon className="w-6 h-6" />
          )
        }
      >
        <AccordionHeader
          className="mb-2"
          onClick={() => setOpenInfo(!openInfo)}
        >
          <Typography
            variant="h3"
            color="blue-gray"
            className="font-medium mb-2"
          >
            Online Learning Platform (OLP)
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70 mb-4"
          >
            The career coach will introduce online learning courses to the bench
            employee through third-party providers (such as Udemy and
            Pluralsight).
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70"
          >
            The bench learner will have the privilege to choose the course he
            /she wants to take/enrol and is expected to provide an output of the
            course/certification he/she has completed. The career coach will
            provide a template to fill out by the bench employee to monitor the
            latter's progress. CoDev will reimburse the enrolment cost after the
            completion of the course.
          </Typography>
        </AccordionBody>
      </Accordion>
      <div>Cards</div>
    </div>
  );
};

export default OnlineLearning;
