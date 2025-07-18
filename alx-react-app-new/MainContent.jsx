import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <UserProfile name="Rama Sheren" age={21} bio="A curious developer who loves to explore new cities." />
      <UserProfile name="Mina Rose" age={24} bio="Travel blogger and mountain climber." />
      <UserProfile name="Ayman Noor" age={28} bio="Urban explorer with a passion for architecture." />
    </main>
  );
}

export default MainContent;
