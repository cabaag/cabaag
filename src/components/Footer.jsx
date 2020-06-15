import React from 'react';

const styles = {
   root: {
      minHeight: 100,
      padding: '20px 0',
      maxWidth: '100%',
      margin: 0,
   },
   bulb: {
      '& *': {
         stroke: 'white',
         fill: 'white',
      },
   },
};

export default function Footer() {
   return (
      <footer className="bg-primary text-white row align-items-center" style={styles.root}>
         <div className="container">
            <div className="row justify-content-center flex-column align-content-center">
               <p className="lead"> - Everything starts with a spark -</p>
            </div>
         </div>
      </footer>
   );
}
