import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const SharingOfExpertise = () => {
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
            Sharing of Expertise (SOE)
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70 mb-4"
          >
            SOE stands for Sharing of Expertise is a bench engagement designed
            specifically for bench team members, offering them a platform to
            showcase their expertise and be recognized as experts in their
            respective fields.
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70"
          >
            The primary goal of SOE is to foster the development of team
            members' self-confidence, communication skills, presentation and
            facilitation abilities, creativity, and the capacity to answer
            questions effectively. These key soft skills are essential for
            preparing bench members for successful client engagements.
          </Typography>
        </AccordionBody>
      </Accordion>
      <div>Cards</div>
    </div>
  );
};

export default SharingOfExpertise;
