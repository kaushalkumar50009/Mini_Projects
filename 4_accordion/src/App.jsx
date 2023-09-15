import Questions from './component/Questions'
import "./App.css"
import React, { useState } from 'react';
import data from './component/data';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Questions key={question.id} {...question} />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
