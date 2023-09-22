import { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Typography,
  Input,
  Select,
  Option,
} from '@material-tailwind/react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

const TABLE_HEAD = ['Name', 'Role', 'Project', 'Start Date', 'End Date'];

const TABLE_ROWS = [
  {
    name: 'John Michael',
    email: 'john_michael@codev.com',
    job: 'UI/UX',
    project: 'Engagement Portal',
    startDate: '01/01/21',
    endDate: '01/01/22',
  },
  {
    name: 'Alexa Liras',
    email: 'alexa_liras@codev.com',
    job: 'Backend Developer',
    project: '',
    startDate: '01/01/21',
    endDate: '01/01/22',
  },
  {
    name: 'Laurent Perrier',
    email: 'laurent_perrier@codev.com',
    job: 'Frontend Developer',
    project: 'Engagement Portal',
    startDate: '01/01/21',
    endDate: '01/01/22',
  },
  {
    name: 'Michael Levi',
    email: 'michael_levi@codev.com',
    job: 'Frontent Developer',
    project: 'Engagement Portal',
    startDate: '01/01/21',
    endDate: '01/01/22',
  },
  {
    name: 'Richard Gran',
    email: 'richard_gran@codev.com',
    job: 'Mobile Developer',
    project: '',
    startDate: '01/01/21',
    endDate: '01/01/22',
  },
];

const DefaultPagination = () => {
  const [active, setActive] = useState(1);

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: 'gray',
      onClick: () => setActive(index),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

const BenchMembers = () => {
  return (
    <div>
      <Typography variant="h3" color="blue-gray" className="font-medium mb-8">
        Bench Members
      </Typography>
      <Button className="flex items-center gap-1 py-2 px-3 capitalize bg-codevRed text-sm mb-8 font-normal rounded-md">
        <PlusIcon className="h-6 w-6" />
        Add member
      </Button>
      <div className="flex flex-col items-center justify-center">
        <Card className="h-full w-full overflow-auto mb-6 rounded-md border-[#EBEDEF] border-2 shadow-sm">
          <div className="p-4 flex items-center">
            <div className="w-60 mr-12">
              <Input
                placeholder="Search"
                icon={<MagnifyingGlassIcon className="h-4 w-4" />}
                crossOrigin={undefined}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="w-48 mr-4">
              <Select label="Filter by Role">
                <Option>Role</Option>
              </Select>
            </div>
            <div className="w-48 mr-4">
              <Select label="Filter by Project">
                <Option>Role</Option>
              </Select>
            </div>
            <div className="w-48">
              <Select label="Filter by Status">
                <Option>Role</Option>
              </Select>
            </div>
          </div>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ name, email, job, project, startDate, endDate }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt={name}
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {project}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {startDate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {endDate}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
        <DefaultPagination />
      </div>
    </div>
  );
};

export default BenchMembers;
