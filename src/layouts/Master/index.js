import React from 'react';
import { MainLayout, SideBarMenu, ContentBar } from './style';

import Sidebar from 'layouts/Sidebar'

const index = (props) => {
  return (
    <MainLayout>
      <SideBarMenu>
        <Sidebar />
      </SideBarMenu>
      <ContentBar>
        { props.children }
      </ContentBar>
    </MainLayout>
  )
}

export default index
