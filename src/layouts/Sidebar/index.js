import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Sidebar, ListMenu, TitleMenu, ItemMenu, ImgCafe, NameCafe } from './style';

import data from './data.json';
import LogoCafe from 'assets/images/logo-cafe.jpg';

const Index = () => { 
  const [listMenu] = useState(data)
  return (
    <Sidebar>
      
      <ImgCafe src={LogoCafe} />
      <NameCafe>Coffe Place</NameCafe>
      {
        listMenu.map((menu, key) =>{
          return(
            <ListMenu key={key}>
              <TitleMenu>
              {
                menu.path ? <Link to={menu.path}>{menu.title}</Link>:menu.title
              }
              </TitleMenu>
              {
                menu.list && menu.list.map((list) =>{
                  return(
                    <ItemMenu key={list.id}>
                      <Link to={ list.path }>{ list.name }</Link>
                    </ItemMenu>
                  )
                })
              }
            </ListMenu>
          )
        })
      }
    </Sidebar>
  )
}

export default Index
