import React from 'react';
import { images } from './assets/mock-data/images';
import * as Art from './PictureStyles';

import './App.css';

const App: React.FC = () => {

  const handleClick = React.useCallback((img: string) => {
    
  }, []);

  return (
    <Art.Container>
      <Art.Title>Hi, I'm Sandy and my face is melting</Art.Title>
      <div>
        <Art.List>
          {images.map(i => (
            <Art.ListItem key={i}>
              <Art.Image src={i} />
            </Art.ListItem>))
          }
        </Art.List>
      </div>
    </Art.Container>
  );
}

export default App;
