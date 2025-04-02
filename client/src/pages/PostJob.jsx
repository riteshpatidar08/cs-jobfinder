import { Button, Select, Drawer, TextInput, MultiSelect } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';

function PostJob() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="flex justify-between px-20 py-10">
        <h1 className="text-2xl font-bold">Available Jobs</h1>
        <Button onClick={open} variant="default">
          Create Job
        </Button>
      </div>
      <Drawer
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        opened={opened}
        position="right"
        onClose={close}
        title="Add New Job"
      >
        <form>
          <TextInput label="Title" placeholder="Enter Job title" />
          <TextInput
            label="Phone Number"
            type="number"
            placeholder="Enter Phone Number"
          />
          <TextInput type="email" label="Email" placeholder="Enter  Email" />
         <Select
      label="Experiance"
      placeholder="Select Experiance"
      data={['0-1 years', '1-3 years', '3-5 years', '5+ years']}
    />
      <MultiSelect
      label="Requirement"
      placeholder="Pick requirements"
      data={ ["Full-time","Part-time", "Contract" , "Internship"]}
    />
          <Button mt={10} variant="default">
            ADD JOB
          </Button>
        </form>
      </Drawer>
    </div>
  );
}

export default PostJob;
