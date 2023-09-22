import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Select,
  Option,
} from '@material-tailwind/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlayCircleIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/20/solid';

const SynergyProjects = () => {
  const [openInfo, setOpenInfo] = useState(true);

  return (
    <div>
      <Accordion
        className="max-w-6xl mb-4"
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
            Synergy Projects
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70 mb-4"
          >
            Bench employees will be grouped based on their skill sets and
            assigned project to work on. The group will be given time to meet
            with their team members to plan and brainstorm on a potential
            project, after which, the team will propose/present the project plan
            to the career coach.
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70"
          >
            A template of the synergy project plan will be provided to record
            and monitor the development of the project. Reporting of project
            development will be done bi-weekly.
          </Typography>
        </AccordionBody>
      </Accordion>
      <div className="flex space-x-6">
        <Button className="flex items-center gap-1 py-2 px-3 capitalize bg-codevRed text-sm mb-8 font-normal rounded-md">
          <PlusIcon className="h-6 w-6" />
          Add project
        </Button>
        <div className="w-48">
          <Select label="Filter by Status">
            <Option>Role</Option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-7xl lg:grid-cols-2">
        <Card className="mt-2 border-2">
          <CardBody>
            <div className="mb-5 flex justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-5 font-bold"
              >
                CoPom (CoDev Pomodoro App)
              </Typography>
              <Typography
                variant="span"
                className="text-xs text-[#F0FDF4] bg-[#2AD168] px-3 h-8 rounded-3xl flex items-center"
              >
                Completed
              </Typography>
            </div>
            <Typography className="font-normal text-[#556987] mb-4 mr-20">
              Lorem ipsum dolor sit amet consectetur. Nunc ultricies lectus
              elementum viverra scelerisque nulla. Leo semper mauris erat ipsum
              quis enim nibh aliquam. Gravida elit feugiat mattis consectetur.
            </Typography>
            <Typography className="font-normal text-[#556987]">
              Team: A
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex space-x-4">
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                View Details <ChevronRightIcon className="ml-2 h-6 w-6" />
              </Button>
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                <PlayCircleIcon className="mr-2 h-6 w-6" />
                Watch Video
              </Button>
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                <ClipboardDocumentListIcon className="mr-2 h-6 w-6" />
                Attendance Sheet
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="mt-2 border-2">
          <CardBody>
            <div className="mb-5 flex justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-5 font-bold"
              >
                FlightCheap (Cheapest Flight Fare Finder)
              </Typography>
              <Typography
                variant="span"
                className="text-xs text-[#F0FDF4] bg-[#F59E0B] px-3 h-8 rounded-3xl flex items-center"
              >
                Pending
              </Typography>
            </div>
            <Typography className="font-normal text-[#556987] mb-4 mr-20">
              Lorem ipsum dolor sit amet consectetur. Nunc ultricies lectus
              elementum viverra scelerisque nulla. Leo semper mauris erat ipsum
              quis enim nibh aliquam. Gravida elit feugiat mattis consectetur.
            </Typography>
            <Typography className="font-normal text-[#556987]">
              Team: B
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex space-x-4">
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                View Details <ChevronRightIcon className="ml-2 h-6 w-6" />
              </Button>
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                <PlayCircleIcon className="mr-2 h-6 w-6" />
                Watch Video
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="mt-2 border-2">
          <CardBody>
            <div className="mb-5 flex justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-5 font-bold"
              >
                BenchEase (Empowering Bench...)
              </Typography>
              <Typography
                variant="span"
                className="text-xs text-[#F0FDF4] bg-[#3B82F6] px-3 h-8 rounded-3xl flex items-center"
              >
                Ongoing
              </Typography>
            </div>
            <Typography className="font-normal text-[#556987] mb-4 mr-20">
              Lorem ipsum dolor sit amet consectetur. Nunc ultricies lectus
              elementum viverra scelerisque nulla. Leo semper mauris erat ipsum
              quis enim nibh aliquam. Gravida elit feugiat mattis consectetur.
            </Typography>
            <Typography className="font-normal text-[#556987]">
              Team: C
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex space-x-4">
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                View Details <ChevronRightIcon className="ml-2 h-6 w-6" />
              </Button>
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                <PlayCircleIcon className="mr-2 h-6 w-6" />
                Watch Video
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="mt-2 border-2">
          <CardBody>
            <div className="mb-5 flex justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-5 font-bold"
              >
                CoDev Feedback System
              </Typography>
              <Typography
                variant="span"
                className="text-xs text-[#F0FDF4] bg-[#A855F7] px-3 h-8 rounded-3xl flex items-center"
              >
                For Presentation
              </Typography>
            </div>
            <Typography className="font-normal text-[#556987] mb-4 mr-20">
              Lorem ipsum dolor sit amet consectetur. Nunc ultricies lectus
              elementum viverra scelerisque nulla. Leo semper mauris erat ipsum
              quis enim nibh aliquam. Gravida elit feugiat mattis consectetur.
            </Typography>
            <Typography className="font-normal text-[#556987]">
              Team: D
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex space-x-4">
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                View Details <ChevronRightIcon className="ml-2 h-6 w-6" />
              </Button>
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                <PlayCircleIcon className="mr-2 h-6 w-6" />
                Watch Video
              </Button>
              <Button className="capitalize bg-[#54565A] text-sm font-medium flex items-center px-4 py-2">
                <ClipboardDocumentListIcon className="mr-2 h-6 w-6" />
                Attendance Sheet
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SynergyProjects;
