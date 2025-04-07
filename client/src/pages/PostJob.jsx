import {
  Button,
  Textarea,
  Select,
  Drawer,
  TextInput,
  MultiSelect,
  Group,
} from '@mantine/core';
import React from 'react';
import axios from 'axios'
import { useDisclosure } from '@mantine/hooks';
import { useForm } from 'react-hook-form';
function PostJob() {

  const [opened, { open, close }] = useDisclosure(false);
  const { register, handleSubmit, setValue } = useForm();


  const onSubmit = (data) => {
   const jobPayload = {...data , salary : {min : data.min , max:data.max ,} , requirement : data.requirement.split(',').map(el => el.trim()) , createdBy : localStorage.getItem('id')}
   console.log(jobPayload)

   axios.post( 'http://localhost:3000/job/create' , jobPayload  , {
    headers : {
      Authorization : `Bearer ${localStorage.getItem('token')}`
    }
   }
   ).then((res)=>console.log(res.data))
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              {...register('title')}
              label="Title"
              placeholder="Enter Job title"
            />
            <TextInput
              label="Phone Number"
              type="number"
              {...register('phoneNumber')}
              placeholder="Enter Phone Number"
            />
            <TextInput
              {...register('email')}
              type="email"
              label="Email"
              placeholder="Enter  Email"
            />
            <TextInput
              {...register('companyName')}
              label="Company Name"
              placeholder="Enter Company name"
            />
            <TextInput
              {...register('location')}
              label="Location"
              placeholder="Enter Job Location"
            />

            <TextInput
              label="Requirement"
              {...register('requirement')}
              placeholder="Enter Comma Sperated eg: react , javascript "
            />
            <Select
              label="Experience"
              placeholder="Select Experience"
              // {...register('experience')}
              onChange={(value)=>setValue('experience', value)}
              data={['0-1 years', '1-3 years', '3-5 years', '5+ years']}
            />
            <MultiSelect
              label="Employment"
              placeholder="Pick Employment"
              {...register('employment')}
              data={['Full-time', 'Part-time', 'Contract', 'Internship']}
                            onChange={(value)=>setValue('employment', value)}
            />
            <Textarea
              label="Job Description"
              {...register('jobDescription')}
              placeholder="Enter Job Description"
            />

            <h1 className="text-sm">Salary Range</h1>
            <Group>
              <TextInput
                {...register('min')}
                label="Min"
                placeholder="Enter min salary"
                type="number"
              />
              <TextInput
                {...register('max')}
                label="Max"
                placeholder="Enter max salary"
                type="number"
              />
            </Group>
            <Button type="submit" mt={10} variant="default">
              ADD JOB
            </Button>
          </form>
        </Drawer>
      </div>
    );
  
}
export default PostJob;
