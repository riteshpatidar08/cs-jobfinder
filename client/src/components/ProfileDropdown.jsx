import React from 'react'
import { Menu , Avatar } from '@mantine/core'
import { Link } from 'react-router-dom'
function ProfileDropdown() {
  return (
    <div>
      <Menu shadow='md' width={200}>
<Menu.Target>
    <Avatar  radius='xl'/>
</Menu.Target>
<Menu.Dropdown>
    <Menu.Label>
        Profile
    </Menu.Label>
     <Menu.Item >
      <Link to='/postjob'>
      Post Job
      </Link>
        </Menu.Item>
     <Menu.Item >
          Settings
        </Menu.Item>
        <Menu.Item>
          Messages
        </Menu.Item>
</Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default ProfileDropdown
