import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
function Register() {
  const { register, handleSubmit, watch } = useForm();

  console.log(register('name'));

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('password', data.password);
    formData.append('role', data.role);

    if (data.role === 'jobseeker') {
      formData.append(
        'jobseeker',
        JSON.stringify({
          education: [
            {
              institution: data.institution,
              year: data.year,
              degree: data.degree,
            },
          ],
          experience: [
            {
              company: data.company,
              jobRole: data.jobRole,
              duration: data.duration,
            },
          ],
          skills: data.skills.split(','),
          resume: data.resume[0],
        })
      );
    }

    if(data.role === 'recruiter'){
      formData.append('recruiter', JSON.stringify({
          companyName : data.companyName ,
          companyWebsite : data.companyWebsite
      }))
    }

    console.log(formData)
    axios.post('http://localhost:3000/api/register',formData).then((data)=>{
      console.log(data)
    })
  };

  const selectedRole = watch('role');

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-red-500 text-white py-6 px-8">
          <h1 className="text-2xl font-bold">
            Create your <span className="font-extrabold">JobFinder</span>{' '}
            profile
          </h1>
          <p className="mt-2 text-white text-opacity-90">
            Search & apply to jobs from India's No.1 Job Site
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('name')}
                className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                placeholder="What is your name?"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                {...register('password', { required: true })}
                className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                placeholder="Your Password"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('phoneNumber', { required: true })}
                className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                placeholder="Your Phone Number"
              />
            </div>
          </div>

          <div className="py-2">
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Are you a? <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  {...register('role', { required: true })}
                  value="jobseeker"
                  className="mr-2 text-red-500 focus:ring-red-500 h-4 w-4"
                />
                <span className="text-gray-700">Job Seeker</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  {...register('role', { required: true })}
                  value="recruiter"
                  className="mr-2 text-red-500 focus:ring-red-500 h-4 w-4"
                />
                <span className="text-gray-700">Recruiter</span>
              </label>
            </div>
          </div>

          {selectedRole === 'jobseeker' && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Job Seeker Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Degree
                  </label>
                  <input
                    type="text"
                    {...register('degree')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Your Degree"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    {...register('institution')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Your Institution"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    {...register('year')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Year of Graduation"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Duration (Years)
                  </label>
                  <input
                    type="number"
                    {...register('duration')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Duration"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Job Role
                  </label>
                  <input
                    type="text"
                    {...register('jobRole')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Job Role"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Skills
                  </label>
                  <input
                    type="text"
                    {...register('skills')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="E.g., JavaScript, React"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col rounded-lg border-2 border-dashed w-full h-32 p-10 group text-center border-gray-300 cursor-pointer hover:bg-gray-50">
                      {/* <div className="h-full w-full text-center flex flex-col items-center justify-center">
                        <p className="text-gray-500">
                          Drag and drop your resume or click to browse
                        </p>
                      </div> */}
                      <input
                        type="file"
                        j
                        {...register('resume')}
                        className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedRole === 'recruiter' && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recruiter Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...register('companyName')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company Website
                  </label>
                  <input
                    type="text"
                    {...register('companyWebsite')}
                    className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
                    placeholder="Company Website"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500">
              By clicking Register, you agree to the{' '}
              <span className="text-red-500 font-medium hover:underline cursor-pointer">
                Terms and Conditions
              </span>{' '}
              &{' '}
              <span className="text-red-500 font-medium hover:underline cursor-pointer">
                Privacy Policy
              </span>{' '}
              of JobFinder.com
            </p>
            <button
              type="submit"
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 shadow-sm"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
