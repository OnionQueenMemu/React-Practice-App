import React from 'react';
import Clock from './Clock.js';
import Folder from './Folder';
import Weather from './Weather.js';

function Root() {

  const folders = [
    {title: 'one', content: 'I am the first'},
    {title: 'two', content: 'Second folder here'},
    {title: 'three', content: 'Third folder here'}
  ];
  return (
    <>
      <h1 className="hello">Hello world!</h1>
      <Clock />
      <Folder folders={folders} />
      <Weather />
    </>
  );
}

export default Root;
