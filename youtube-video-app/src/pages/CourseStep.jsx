import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseData } from '../data/courseData';
import './CourseStep.css';

function CourseStep() {
  const { stepId } = useParams();

  const currentStepNumber = parseInt(stepId, 10);
  const step = courseData.find(s => s.id === currentStepNumber);

  if (!step) {
    return (
      <div className="course-step-container">
        <h1>Paso no encontrado</h1>
        <Link to="/curso/paso-1">Volver al inicio del curso</Link>
      </div>
    );
  }

  const isFirstStep = currentStepNumber === 1;
  const isLastStep = currentStepNumber === courseData.length;

  return (
    <div className="course-step-container">
      <div className="step-header">
        <h1>{step.title}</h1>
      </div>
      <div className="step-content">
        <div className="topic-column">
          <h2>GRAMÁTICA</h2>
          <div className="topic-grid">
            {step.grammar.map((topic, index) => (
              <button key={index} className="topic-box grammar">{topic}</button>
            ))}
          </div>
        </div>
        <div className="topic-column">
          <h2>VOCABULARIO</h2>
          <div className="topic-grid">
            {step.vocabulary.map((topic, index) => (
              <button key={index} className="topic-box vocabulary">{topic}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="step-action-button-container">
        <button className="button tertiary">REALIZAR OBJETIVOS</button>
      </div>

      <div className="step-navigation">
        <Link to={`/curso/paso/${currentStepNumber - 1}`} className={`nav-arrow left ${isFirstStep ? 'disabled' : ''}`}>
          ◀
        </Link>
        
        <span>PASO {currentStepNumber} (HASTA {courseData.length})</span>

        <Link to={`/curso/paso/${currentStepNumber + 1}`} className={`nav-arrow right ${isLastStep ? 'disabled' : ''}`}>
          ▶
        </Link>
      </div>
    </div>
  );
}

export default CourseStep;